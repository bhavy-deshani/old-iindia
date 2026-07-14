document.addEventListener("DOMContentLoaded", function () {
  let chart; // Declare chart variable outside functions
  let debounceTimer;

  // Debounce function to limit the frequency of API calls
  function debounce(func, delay) {
    return function(...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Debounced version of the fetchData function
  const debouncedFetchData = debounce(fetchData, 300);

  // Function to synchronize range and number inputs
  function updateInputValue(rangeInput, numberInput) {
    numberInput.value = rangeInput.value;
    debouncedFetchData();
  }

  function updateRangeValue(numberInput, rangeInput) {
    rangeInput.value = numberInput.value;
    debouncedFetchData();
  }

  function setupSync(rangeInput, numberInput) {
    rangeInput.addEventListener("input", () =>
      updateInputValue(rangeInput, numberInput)
    );
    numberInput.addEventListener("input", () =>
      updateRangeValue(numberInput, rangeInput)
    );
  }

  const inputs = [
    { range: "yearsRange", number: "years" },
    { range: "dreamAmountRange", number: "dreamAmount" },
    { range: "inflationRateRange", number: "inflationRate" },
    { range: "expectedReturnRange", number: "expectedReturn" },
    { range: "savingsAmountRange", number: "savingsAmount" },
  ];

  inputs.forEach(({ range, number }) => {
    const rangeInput = document.getElementById(range);
    const numberInput = document.getElementById(number);
    if (rangeInput && numberInput) {
      setupSync(rangeInput, numberInput);
    }
  });

  async function fetchData() {
    const years = document.getElementById("years").value;
    const dreamAmount = document.getElementById("dreamAmount").value;
    const inflationRate = document.getElementById("inflationRate").value;
    const expectedReturn = document.getElementById("expectedReturn").value;
    const savingsAmount = document.getElementById("savingsAmount").value;

    const apiKey = "mfapikey";
    const reqtype = `calc/getGoalSettingCalcResult`;
    //New Altered
    // const apiUrl = "https://www.integratedindia.in/API/ADKAPI.aspx";
    const requestData = new URLSearchParams({
      key: apiKey,
      reqtype: reqtype,
      years: years,
      dream_amount: dreamAmount,
      inflation_rate: inflationRate,
      expected_return: expectedReturn,
      savings_amount: savingsAmount,
    });
    const url = `/${CalcApi}?${requestData.toString()}`;

    try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 200) {
        displayResult(data);
        displayChart(data);
      } else {
        displayError(`API Error: ${data.msg}`);
      }
    } catch (error) {
      console.error("Error:", error);
      displayError(error.message);
    }
  }

  function displayResult(data) {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    document.getElementById("targetDreamAmount").textContent = formatter.format(
      data.target_dream_amount
    );
    document.getElementById("targetSavingsAmount").textContent =
      formatter.format(data.target_savings_amount);
    document.getElementById("targetAmount").textContent = formatter.format(
      data.target_amount
    );
    document.getElementById("monthlySavings").textContent = formatter.format(
      data.monthly_savings
    );
    document.getElementById("investedAmount").textContent = formatter.format(
      data.invested_amount
    );
    document.getElementById("totalEarnings").textContent = formatter.format(
      data.total_earnings
    );

    const mobSavings = document.getElementById("mobileMonthlySavings");
    if (mobSavings) mobSavings.textContent = formatter.format(data.monthly_savings);

    const colInvested = document.getElementById("colInvestedAmount");
    if (colInvested) colInvested.textContent = formatter.format(data.invested_amount);

    const colGrowth = document.getElementById("colGrowthValue");
    if (colGrowth) colGrowth.textContent = formatter.format(data.total_earnings);

    document.getElementById("results").style.display = "block";
  }

  function displayError(message) {
    const errorDiv = document.getElementById("error");
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = "block";
    }
  }

  function displayChart(data) {
    const ctx = document.getElementById("goalChart").getContext("2d");
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });

    // Ensure chart instance is destroyed if it exists
    if (chart instanceof Chart) {
      chart.destroy();
    }

    // Create a new chart instance
    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Invested Amount", "Total Earnings"],
        datasets: [
          {
            data: [data.invested_amount, data.total_earnings],
            backgroundColor: ["#005CB9", "#00AE42"],
            borderWidth: 0,
            hoverOffset: 8
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return ctx.label + ': ' + formatter.format(ctx.raw);
              }
            }
          }
        }
      }
    });
  }

  // Initial data fetch
  fetchData();
});
