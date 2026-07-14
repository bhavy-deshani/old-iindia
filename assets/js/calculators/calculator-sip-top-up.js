
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
    <div class="gsc-result-row">
        <span class="gsc-result-label">Initial SIP Amount</span>
        <span class="gsc-result-val">&#8377;${data.sip_amount.toLocaleString('en-IN')}</span>
    </div>
    <div class="gsc-result-row">
        <span class="gsc-result-label">Total Invested Amount</span>
        <span class="gsc-result-val">&#8377;${data.invested_amount.toLocaleString('en-IN')}</span>
    </div>
    <div class="gsc-result-row">
        <span class="gsc-result-label">Growth Value</span>
        <span class="gsc-result-val">&#8377;${data.growth_value.toLocaleString('en-IN')}</span>
    </div>
    <div class="gsc-result-row">
        <span class="gsc-result-label fw-bold">Maturity Amount</span>
        <span class="gsc-result-val highlight">&#8377;${data.maturity_amount.toLocaleString('en-IN')}</span>
    </div>
  `;

  const mobileMaturity = document.getElementById("mobileMaturityAmount");
  if (mobileMaturity) mobileMaturity.innerHTML = `&#8377;${data.maturity_amount.toLocaleString('en-IN')}`;

  const colInvested = document.getElementById("colInvestedAmount");
  if (colInvested) colInvested.innerHTML = `&#8377;${data.invested_amount.toLocaleString('en-IN')}`;

  const colGrowth = document.getElementById("colGrowthValue");
  if (colGrowth) colGrowth.innerHTML = `&#8377;${data.growth_value.toLocaleString('en-IN')}`;

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
      labels: ["Total Invested Amount", "Growth Value"],
      datasets: [
        {
          data: [data.invested_amount, data.growth_value],
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
              return ctx.label + ': ' + new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(ctx.raw);
            }
          }
        }
      }
    }
  });
}

calculateAndDisplayResults();

//Goal-Based Top Up SIP Calculator end