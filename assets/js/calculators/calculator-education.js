document.getElementById("educationPlannerForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  
  const apiKey = "bf27810f-27a3-44f3-b28d-c0a863d04ffb"; // Add your API key here
  // const apiKey = "mfapikey"; // Add your API key here
  const child1Name = document.getElementById('child1Name').value;
  const child1CurrentAge = document.getElementById('child1CurrentAge').value;
  const child1EducationAge = document.getElementById('child1EducationAge').value;
  const child1EducationAmount = document.getElementById('child1EducationAmount').value;
  const child2Name = document.getElementById('child2Name').value || "";
  const child2CurrentAge = document.getElementById('child2CurrentAge').value || 0;
  const child2EducationAge = document.getElementById('child2EducationAge').value || 0;
  const child2EducationAmount = document.getElementById('child2EducationAmount').value || 0;
  const inflationRate = document.getElementById('inflationRate').value;
  const expectedReturn = document.getElementById('expectedReturn').value;
  const savingsAmount = document.getElementById('savingsAmount').value;

  // const reqtype = `calc/getEducationPlannerResult`;
//   const apiUrl = "https://mfapi.advisorkhoj.com/calc/getEducationPlannerResult";    
  const paramsdata = new URLSearchParams({
      key: apiKey,
      // reqtype: reqtype,
      child1_name: child1Name,
      child1_current_age: child1CurrentAge,
      child1_education_age: child1EducationAge,
      child1_education_amount: child1EducationAmount,
      child2_name: child2Name,
      child2_current_age: child2CurrentAge,
      child2_education_age: child2EducationAge,
      child2_education_amount: child2EducationAmount,
      inflation_rate: inflationRate,
      expected_return: expectedReturn,
      savings_amount: savingsAmount
  });

  const url = `${ChildrenCalcApi}?${paramsdata.toString()}`;
//   console.log("Request URL:", url);

  try {
      const response = await fetch(url, {
          method: 'POST'
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
    //   console.log("Response data:", data);

      if (data.status === 200) {
          displayResult(data);
      } else {
          displayError(`API Error: ${data.msg}`);
      }
  } catch (error) {
      console.error("Error:", error);
      displayError(error.message);
  }

  function displayResult(data) {
      const formatter = new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR'
      });

      // Fallback to handle inconsistent field names
      const inflationAdjustedEducationAmount = data.total_inflation_adjusted_education_amount || data.toal_inflation_adjust_education_amount || 0;

      const resultTable = `
          <table class="table table-bordered overflow-auto ">
              <thead>
                  <tr>
                      <th>Education Planner</th>
                      <th>Cost of ${data.child1_name}'s education</th>
                      <th>Cost of ${data.child2_name ? data.child2_name + "'s education" : "-"}</th>
                      <th>Total cost for both</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Amount at today's prices</td>
                      <td>${formatter.format(data.child1_education_amount)}</td>
                      <td>${data.child2_name ? formatter.format(data.child2_education_amount) : '-'}</td>
                      <td>${formatter.format(data.total_education_amount)}</td>
                  </tr>
                  <tr>
                      <td>Your child will take up professional education in</td>
                      <td>${data.child1_education_age} year(s)</td>
                      <td>${data.child2_name ? data.child2_education_age + " year(s)" : '0 year(s)'}</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>Expected rate of return from investments (% per annum)</td>
                      <td>${data.expected_return} %</td>
                      <td>${data.expected_return} %</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>Future cost of education (Inflation adjusted)</td>
                      <td>${formatter.format(data.child1_inflation_adjust_education_amount)}</td>
                      <td>${data.child2_name ? formatter.format(data.child2_inflation_adjust_education_amount) : '-'}</td>
                      <td>${formatter.format(inflationAdjustedEducationAmount)}</td>
                  </tr>
                  <tr>
                      <td>Your current savings amount</td>
                      <td>${formatter.format(data.child1_savings_amount)}</td>
                      <td>${data.child2_name ? formatter.format(data.child2_savings_amount) : '-'}</td>
                      <td>${formatter.format(data.total_savings_amount)}</td>
                  </tr>
                  <tr>
                      <td>Monthly Savings required</td>
                      <td>${formatter.format(data.child1_monthly_savings)}</td>
                      <td>${formatter.format(data.child2_monthly_savings)}</td>
                      <td>${formatter.format(data.total_monthly_savings)}</td>
                  </tr>
              </tbody>
          </table>
      `;

      document.getElementById("results").innerHTML = resultTable;
      document.getElementById("results").style.display = 'block';
      document.getElementById("error").style.display = 'none';
      document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
  }

  function displayError(message) {
      const errorDiv = document.getElementById("error");
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
  }
});
