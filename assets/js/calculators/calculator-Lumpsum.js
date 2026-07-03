let chart; // Declare chart variable outside functions
let debounceTimer;

// Debounce function to limit the frequency of API calls
function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Debounced version of the calculateLumpsum function
const debouncedCalculateLumpsum = debounce(calculateLumpsum, 300);

// Function to synchronize range inputs with number inputs
function syncRangeAndNumber(rangeInput, numberInput) {
  rangeInput.addEventListener("input", function () {
    numberInput.value = rangeInput.value;
    numberInput.dispatchEvent(new Event("input"));
    debouncedCalculateLumpsum();
  });
  numberInput.addEventListener("input", function () {
    rangeInput.value = numberInput.value;
    debouncedCalculateLumpsum();
  });
}

// Function to calculate lumpsum and update results
async function calculateLumpsum() {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.style.display = "block"; // Show loading indicator
  }

  const apiKey = "mfapikey"; // Add your API key here
  const targetAmount = document.getElementById("targetAmount").value;
  const years = document.getElementById("years").value;
  const expectedReturn = document.getElementById("expectedReturn").value;

  const reqtype = `calc/getLumpsumTargetCalcResult`;
  //New Altered
  // const CalcApi = "https://www.integratedindia.in/API/ADKAPI.aspx";

  const paramsdata = new URLSearchParams({
    key: apiKey,
    reqtype: reqtype,
    target_amount: targetAmount,
    years: years,
    expected_return: expectedReturn,
  });
  const url = `${CalcApi}?${paramsdata.toString()}`;

  try {
    const response = await fetch(url, { method: "POST" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.status === 200) {
      displayResult(data);
    } else {
      displayError(`API Error: ${data.msg}`);
    }
  } catch (error) {
    displayError(error.message);
  } finally {
    if (loadingElement) {
      loadingElement.style.display = "none"; // Hide loading indicator
    }
  }
}

// Function to display the result
function displayResult(data) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  document.getElementById("targetAmountResult").textContent = formatter.format(
    data.target_amount
  );
  document.getElementById("yearsResult").textContent = data.years;
  document.getElementById("lumpsumAmount").textContent = formatter.format(
    data.lumpsum_amount
  );

  document.getElementById("results").style.display = "block";

  // Update the chart with the new data
  updateChart(data);
}

// Function to display an error message
function displayError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

// Function to update or create the chart
function updateChart(data) {
  const ctx = document.getElementById("resultChart").getContext("2d");
  const chartData = [data.target_amount, data.lumpsum_amount];

  if (chart) {
    // Update chart data
    chart.data.datasets[0].data = chartData;
    chart.update();
  } else {
    // Create new chart
    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "Values",
            data: chartData,
            backgroundColor: ["#143980", "#00ae42"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return (
                  tooltipItem.label +
                  ": " +
                  new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(tooltipItem.raw)
                );
              },
            },
          },
        },
      },
    });
  }
}

// Initialize synchronization and perform initial calculation
document.addEventListener("DOMContentLoaded", function () {
  syncRangeAndNumber(
    document.getElementById("targetAmountRange"),
    document.getElementById("targetAmount")
  );
  syncRangeAndNumber(
    document.getElementById("yearsRange"),
    document.getElementById("years")
  );
  syncRangeAndNumber(
    document.getElementById("expectedReturnRange"),
    document.getElementById("expectedReturn")
  );

  calculateLumpsum(); // Initial calculation on page load
});
