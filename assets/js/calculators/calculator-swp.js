document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "mfapikey"; // Add your API key here
  // const apiUrl = "https://www.integratedindia.in/API/ADKAPI.aspx";
  // const apiUrl = "API/testADKAPI.aspx";
  const getAllCompaniesUrl = `${CalcApi}?reqtype=getAllCompanies&key=${apiKey}`;
  const getSchemeByAmcUrl = "&reqtype=getSchemeByAmcApi";
  const swpCalculatorUrl = "getSWPReturnCalculator";
  
  const amcSelect = document.getElementById("amc_name");
  const schemeSelect = document.getElementById("scheme_name");

  // Function to fetch and populate AMC dropdown
  function populateAmcDropdown() {
    fetch(getAllCompaniesUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log("AMC Data:", data); // Debugging statement
        if (data.status === 200) {
          data.list.forEach((amc) => {
            const option = document.createElement("option");
            option.textContent = amc;
            option.value = amc;
            amcSelect.appendChild(option);
          });
        }
      })
      .catch((error) => console.error("Error fetching AMCs:", error));
  }

  // Function to fetch and populate Scheme dropdown based on selected AMC
  function populateSchemeDropdown(selectedAmc) {
    const url = `${CalcApi}?key=${apiKey}&amc=${selectedAmc}${getSchemeByAmcUrl}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Scheme Data:", data); // Debugging statement
        if (data.status === 200) {
          schemeSelect.innerHTML = '<option value="">Select Scheme</option>';
          data.schemes_list.forEach((scheme) => {
            const option = document.createElement("option");
            option.textContent = scheme;
            option.value = scheme;
            schemeSelect.appendChild(option);
          });
        }
      })
      .catch((error) => console.error("Error fetching schemes:", error));
  }

  // Populate AMC dropdown on page load
  populateAmcDropdown();

  // Event listener for AMC selection
  amcSelect.addEventListener("change", function () {
    const selectedAmc = this.value;
    if (selectedAmc) {
      populateSchemeDropdown(selectedAmc);
    } else {
      schemeSelect.innerHTML = '<option value="">Select Scheme</option>';
    }
  });

  // Function to display the results
  function displayResult(data) {
    if (data.Error) {
      displayError(data.ErrorDescription);
      return;
    }

    // console.log("Result Data:", data); // Debugging statement
    const resultContainer = document.getElementById("result");

    // Create a formatter for INR
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });

    resultContainer.innerHTML = `
          <h3>Results</h3>
          <table class="table overflow-auto">
              <thead>
                  <tr>
                      <th>Scheme</th>
                      <th>AMC Name</th>
                      <th>Withdrawal Period</th>
                      <th>No of Monthly Installments</th>
                      <th>Total Withdrawal Amount</th>
                      <th>Current Value as on 10-06-2024</th>
                      <th>Return (%)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>${data.scheme_name || "N/A"}</td>
                      <td>${data.scheme_mapping?.scheme_company || "N/A"}</td>
                      <td>${data.scheme_withdrawal_period || "N/A"}</td>
                      <td>${data.scheme_installment || "N/A"}</td>
                      <td>${formatter.format(
                        data.scheme_total_withdrawal_amount || 0
                      )}</td>
                      <td>${formatter.format(
                        data.scheme_current_value || 0
                      )}</td>
                      <td>${data.scheme_returns || "N/A"}</td>
                  </tr>
              </tbody>
          </table>

          <h4>Scheme Details</h4>
          <table class="table overflow-auto">
              <thead>
                  <tr>
                      <th>NAV Date</th>
                      <th>NAV</th>
                      <th>Units</th>
                      <th>Cumulative Units</th>
                      <th>Cash Flow</th>
                      <th>Amount</th>
                      <th>Capital Gain</th>
                      <th>No. of Days</th>
                      <th>Current Value</th>
                  </tr>
              </thead>
              <tbody>
                  ${data.scheme_list
                    .map(
                      (item) => `
                      <tr>
                          <td>${item.nav_date}</td>
                          <td>${formatter.format(item.nav || 0)}</td>
                          <td>${item.units.toFixed(2)}</td>
                          <td>${item.cumulative_units.toFixed(2)}</td>
                          <td>${formatter.format(item.cash_flow || 0)}</td>
                          <td>${formatter.format(item.amount || 0)}</td>
                          <td>${formatter.format(item.capital_gain || 0)}</td>
                          <td>${item.no_of_days}</td>
                          <td>${formatter.format(item.current_value || 0)}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>
      `;
  }

  // Function to display an error message
  function displayError(error) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<p>Error: ${error}</p>`;
  }

  // Event listener for form submission
  document
    .getElementById("swpForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const amc = amcSelect.value;
      const scheme_name = schemeSelect.value;
      const initial_amount = document.getElementById("initial_amount").value;
      const swp_date = document.getElementById("swp_date").value; // SWP Date (day of the month)
      const withdrawal_amount =
        document.getElementById("withdrawal_amount").value;
      const period = document.getElementById("period").value;
      const from_date = document.getElementById("from_date").value;
      const to_date = document.getElementById("to_date").value;
      const init_start_date = document.getElementById("init_start_date").value;

      const params = new URLSearchParams({
        key: apiKey,
        reqtype: swpCalculatorUrl, // Correctly assign the calculator type
        amc: amc,
        scheme_name: scheme_name,
        initial_amount: initial_amount,
        swp_date: swp_date,
        withdrawal_amount: withdrawal_amount,
        period: period,
        from_date: from_date,
        to_date: to_date,
        init_start_date: init_start_date,
      });

      // Log parameters to check values before making API request
      // console.log("Request Parameters:", params.toString());

      try {
        const response = await fetch(`${CalcApi}?${params.toString()}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("API Response:", data); // Debugging statement
        displayResult(data);
      } catch (error) {
        displayError(error.message);
      }
    });
});
