
document
  .getElementById("goalBasedTopUpSIPForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    calculateAndDisplayResults();
  });

function calculateAndDisplayResults() {
  const apiKey = "bf27810f-27a3-44f3-b28d-c0a863d04ffb";
  const CalcApi = "https://mfapi.advisorkhoj.com/calc/getGoalBasedTopUpSIPResult";
  const goalAmount = document.getElementById("goalAmount").value;
  const expectedReturn = document.getElementById("expectedReturn").value;
  const investmentPeriod = document.getElementById("investmentPeriod").value;
  const sipTopUpValue = document.getElementById("sipTopUpValue").value;

  const params = new URLSearchParams({
    key: apiKey,
    goal_amount: goalAmount,
    expected_rate_of_return: expectedReturn,
    investment_period: investmentPeriod,
    sip_topup_value: sipTopUpValue,
  });

  const url = `${CalcApi}?${params.toString()}`;
  fetch(url, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === 200) {
        displayResult(data);
      } else {
        displayError(`API Error: ${data.msg}`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      displayError(error.message);
    });
}

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function displayResult(data) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
  <div class="w-100 overflow-auto">
        <table class="table table-bordered ">
            <tbody>
                <tr>
                    <td>Initial SIP Amount</td>
                    <td class="fw-bold">&#8377;${data.sip_amount.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                    <td>Total Invested Amount</td>
                    <td class="fw-bold">&#8377;${data.invested_amount.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                    <td>Growth Value</td>
                    <td class="fw-bold">&#8377;${data.growth_value.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                    <td>Maturity Amount</td>
                    <td class="fw-bold">&#8377;${data.maturity_amount.toLocaleString('en-IN')}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

  displayChart(data);
}

function displayError(error) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p id="error">Error: ${error}</p>`;
}

function synchronizeInput(numberInput, rangeInput) {
  let timeoutId;

  const handleInput = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      calculateAndDisplayResults();
    }, 100); // 1-second delay
  };

  numberInput.addEventListener("input", () => {
    rangeInput.value = numberInput.value;
    handleInput();
  });

  rangeInput.addEventListener("input", () => {
    numberInput.value = rangeInput.value;
    handleInput();
  });
}

synchronizeInput(
  document.getElementById("goalAmount"),
  document.getElementById("goalAmountRange")
);
synchronizeInput(
  document.getElementById("expectedReturn"),
  document.getElementById("expectedReturnRange")
);
synchronizeInput(
  document.getElementById("investmentPeriod"),
  document.getElementById("investmentPeriodRange")
);
synchronizeInput(
  document.getElementById("sipTopUpValue"),
  document.getElementById("sipTopUpValueRange")
);

let chart;

function displayChart(data) {
  const ctx = document.getElementById("resultChart").getContext("2d");
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      // labels: ["Total Invested Amount", "Growth Value"],
      datasets: [
        {
          label: "Amount in ₹",
          data: [data.invested_amount, data.growth_value],
          backgroundColor: ["#143980", "#00ae42"],
          borderColor: ["#143980", "#00ae42"],
          // borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "SIP Investment Results",
        },
      },
    },
  });
}

calculateAndDisplayResults();

//Goal-Based Top Up SIP Calculator end