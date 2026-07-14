// Human Life Value Calculator start

document
  .getElementById("lifeValueCalculatorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    calculateAndDisplayLifeValue();
  });

function calculateAndDisplayLifeValue() {
  const apiKey = "mfapikey";

  const annualIncomeExpense = document.getElementById("annualIncomeExpense").value;
  const expectedIncreaseIncomeExpense = document.getElementById("expectedIncreaseIncomeExpense").value;
  const loanAmount = document.getElementById("loanAmount").value;
  const noYears = document.getElementById("noYears").value;

  const reqtype = "calc/getHumanLifeValueCalcResultByYear";
  const apiUrl = "API/ADKAPI.aspx";
   //const apiUrl = "API/testADKAPI.aspx";

  const params = new URLSearchParams({
    key: apiKey,
    reqtype: reqtype,
    annual_income_expense: annualIncomeExpense,
    expected_increase_income_expense: expectedIncreaseIncomeExpense,
    loan_amount: loanAmount,
    no_years: noYears,
  });

  const url = `/${apiUrl}?${params.toString()}`;

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
        displayLifeValueResult(data);
      } else {
        displayLifeValueError(`API Error: ${data.msg}`);
      }
    })
    .catch((error) => {
      console.error("Full error:", error);
      console.error("Error stack:", error.stack);
      displayLifeValueError(`Failed to calculate: ${error.message}`);
    });
}

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function displayLifeValueResult(data) {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = `
   <div class="">
        <table class="table table-bordered w-100">
            <tbody>
                <tr>
                    <td>Annual Income/Expense:</td>
                    <td class="fw-bold">${formatter.format(data.annual_income_expense)}</td>
                </tr>
                <tr>
                    <td>Expected Increase in Income/Expense:</td>
                    <td class="fw-bold">${data.expected_increase_income_expense}%</td>
                </tr>
                <tr>
                    <td>Loan Amount:</td>
                    <td class="fw-bold">${formatter.format(data.loan_amount)}</td>
                </tr>
                <tr>
                    <td>Cumulative Income/Expense:</td>
                    <td class="fw-bold">${formatter.format(data.cumulative_income_expense)}</td>
                </tr>
                <tr>
                    <td>Human Life Value:</td>
                    <td class="fw-bold">${formatter.format(data.life_cover_value)}</td>
                </tr>
                <tr>
                    <td>Number of Years:</td>
                    <td class="fw-bold">${data.no_years}</td>
                </tr>
            </tbody>
        </table>
    </div>
  `;
  displayLifeValueChart(data);
}

function displayLifeValueError(error) {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = `<p id="error">Error: ${error}</p>`;
}

function synchronizeInput(numberInput, rangeInput) {
  let timeoutId;

  const handleInput = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      calculateAndDisplayLifeValue();
    }, 100);
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
  document.getElementById("annualIncomeExpense"),
  document.getElementById("annualIncomeExpenseRange")
);
synchronizeInput(
  document.getElementById("expectedIncreaseIncomeExpense"),
  document.getElementById("expectedIncreaseIncomeExpenseRange")
);
synchronizeInput(
  document.getElementById("loanAmount"),
  document.getElementById("loanAmountRange")
);
synchronizeInput(
  document.getElementById("noYears"),
  document.getElementById("noYearsRange")
);

let chart;

function displayLifeValueChart(data) {
  const ctx = document.getElementById("resultChart").getContext("2d");
  if (chart) {
    chart.destroy();
  }
    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Annual Income/Expense", "Human Life Value"],
        datasets: [
          {
            data: [data.annual_income_expense, data.life_cover_value],
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
                return ctx.label + ': ' + formatINR(ctx.raw);
              }
            }
          }
        }
      }
    });
}

// Trigger initial calculation
calculateAndDisplayLifeValue();

// Human Life Value Calculator end
