const monthlyInvestmentInput = document.getElementById("monthly-sip");
const monthlyInvestmentValue = document.getElementById("monthly-sip-value");
const sipPeriodInput = document.getElementById("sip-period");
const sipPeriodValue = document.getElementById("sip-period-value");
const expectedReturnInput = document.getElementById("return-rate");
const expectedReturnValue = document.getElementById("return-rate-value");
const sipChart = document.getElementById("sip-chart").getContext("2d");
let chart;

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    // style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateSIP() {
  const monthlyInvestment = parseFloat(monthlyInvestmentInput.value);
  const years = parseFloat(sipPeriodInput.value);
  const annualReturnRate = parseFloat(expectedReturnInput.value) / 100;
  let totalInvestment = monthlyInvestment * years * 12;
  let futureValue = 0;
  for (let i = 1; i <= years; i++) {
    for (let j = 1; j <= 12; j++) {
      futureValue +=
        monthlyInvestment *
        Math.pow(1 + annualReturnRate / 12, (i - 1) * 12 + j);
    }
  }
  let investedAmount = totalInvestment;
  let wealthGained = futureValue - totalInvestment;
  let totalWealth = wealthGained + totalInvestment;

  monthlyInvestmentValue.value = formatCurrency(monthlyInvestment);
  sipPeriodValue.value = `${years}${years > 1 ? "" : ""}`;
  expectedReturnValue.value = `${(annualReturnRate * 100).toFixed()}`;

  document.getElementById(
    "invested-amount-display"
  ).textContent = `Invested Amount: ${formatCurrency(investedAmount)}`;
  document.getElementById(
    "wealth-gained-display"
  ).textContent = `Wealth Gained: ${formatCurrency(wealthGained)}`;
  document.getElementById(
    "total-wealth-display"
  ).textContent = `Total Wealth: ${formatCurrency(totalWealth)}`;

  updateChart(investedAmount, wealthGained);
}

function updateChart(investedAmount, wealthGained) {
  if (chart) {
    chart.data.datasets[0].data[0] = investedAmount;
    chart.data.datasets[0].data[1] = wealthGained;
    chart.update();
  } else {
    chart = new Chart(sipChart, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [investedAmount, wealthGained],
            backgroundColor: ["#00ad41", "#005cb9"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
        cutout: "60%",
      },
    });
  }
}

function updateInputs() {
  calculateSIP();
  ["monthly-sip", "sip-period", "return-rate"].forEach(function (id) {
    const inputElement = document.getElementById(id);
    const value =
      ((inputElement.value - inputElement.min) /
        (inputElement.max - inputElement.min)) *
      100;
    inputElement.style.background = `linear-gradient(to right, #033695 0%, #033695 ${value}%, #cccfcf ${value}%, #cccfcf 100%)`;
  });
}

function syncTextInput(id) {
  const inputElement = document.getElementById(id);
  const textElement = document.getElementById(`${id}-value`);
  const value = inputElement.value;

  if (id === "monthly-sip") {
    textElement.value = formatCurrency(value);
  } else if (id === "sip-period") {
    textElement.value = `${value} ${value > 1 ? "s" : ""}`;
  } else if (id === "return-rate") {
    textElement.value = `${value}`;
  }
  updateInputs();
}

monthlyInvestmentValue.addEventListener("input", function () {
  const value = parseFloat(this.value.replace(/,/g, ""));
  if (
    !isNaN(value) &&
    value >= monthlyInvestmentInput.min &&
    value <= monthlyInvestmentInput.max
  ) {
    monthlyInvestmentInput.value = value;
    updateInputs();
  }
});

sipPeriodValue.addEventListener("input", function () {
  const value = parseFloat(this.value);
  if (
    !isNaN(value) &&
    value >= sipPeriodInput.min &&
    value <= sipPeriodInput.max
  ) {
    sipPeriodInput.value = value;
    updateInputs();
  }
});

expectedReturnValue.addEventListener("input", function () {
  const value = parseFloat(this.value.replace("%", ""));
  if (
    !isNaN(value) &&
    value >= expectedReturnInput.min &&
    value <= expectedReturnInput.max
  ) {
    expectedReturnInput.value = value;
    updateInputs();
  }
});

calculateSIP();

// Show OTP section when "Continue" button is clicked
let otpTimer;
let resendButton;

function requestOTP() {
  const mobile = document.getElementById("mobile").value;

  if (!validateInputs()) return;

  fetch("/api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: "MFSIP",
      Mode: "OTPREQUEST",
      Mobile: mobile,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ErrorCode === "0") {
        // OTP Request Success, show OTP input fields and start timer
        showOTPInput();
        startOTPTimer();
      } else {
        alert(data.Msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showOTPInput() {
  document.getElementById("otpContainer").style.display = "block";
  resendButton = document.getElementById("resendButton");
  resendButton.disabled = true;
}

function validateInputs() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const pincode = document.getElementById("pincode").value;
  const mobileRegex = /^[6-9]\d{9}$/;
  const pincodeRegex = /^\d{6}$/;

  if (name === "" || !mobileRegex.test(mobile) || !pincodeRegex.test(pincode)) {
    alert("Please enter valid details.");
    return false;
  }
  return true;
}

function verifyOTP() {
  const otp = [...document.querySelectorAll("#otpContainer input")]
    .map((input) => input.value)
    .join("");

  if (otp.length !== 4) {
    alert("Please enter a valid 4-digit OTP.");
    return;
  }

  fetch("/api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: "MFSIP",
      Mode: "OTPVERIFY",
	  Refno:"497434",
      ENTEREDOTP: otp,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ErrorCode === "0") {
        // OTP Verified, proceed to save data
        saveData();
      } else {
        alert(data.Msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function saveData() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const pincode = document.getElementById("pincode").value;

  fetch("/api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: "MFSIP",
      Mode: "DATASAVE",
      Name: name,
      Mobile: mobile,
      Email: "user@example.com", // Assuming email is hardcoded or fetched elsewhere
      PinCode: pincode,
      SaveInd: "5",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ErrorCode === "0") {
        saveDataAndRedirect();
      } else {
        alert(data.Msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function saveDataAndRedirect() {
  // Call function to save data
  //saveData();

  // Redirect to the specified URL
  window.location.href =    "https://www.integratedindia.in/sp/instaAcOpen/EKYCInstantAcOpen.aspx?Mobile";
}
function OLDsaveData() {
  // Add your logic to save data here
  // For example:
  console.log("Data saved successfully.");
}
function moveToNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}

function startOTPTimer() {
  let timeLeft = 59;
  otpTimer = setInterval(() => {
    document.getElementById("timer").innerText = `Resend OTP in ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(otpTimer);
      document.getElementById("timer").innerText = "";
      resendButton.disabled = false;
    }
  }, 1000);
}

function resendOTP() {
  resendButton.disabled = true;
  requestOTP();
}

//requestCallBack

//document.getElementById("sipForm").addEventListener("submit", function (event) {
  //event.preventDefault();
function ReqCallBackClick(){
  // Validate form inputs
  const name = document.getElementById("nameh").value.trim();
  const mobile = document.getElementById("mobileh").value.trim();
  const email = document.getElementById("emailh").value.trim();
  const pincode = document.getElementById("pincodeh").value.trim();

  if (!name || !mobile || !email || !pincode) {
    alert("All fields are required.");
    return;
  }

  // Validate mobile number (assuming 10 digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate pincode (assuming 6 digits)
  const pincodePattern = /^[0-9]{6}$/;
  if (!pincodePattern.test(pincode)) {
    alert("Please enter a valid 6-digit pincode.");
    return;
  }

  // Validate PAN number (assuming standard Indian PAN format)
  // const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  // if (!panPattern.test(panno)) {
  //     alert("Please enter a valid PAN number.");
  //     return;
  // }

  // Create the JSON data
  const formData = {
    Type: "MFHELP",
    Mode: "DATASAVE",
    Name: name,
    Mobile: mobile,
    Email: email,
    PinCode: pincode,
    SaveInd: "6",
  };

  // Send the data to the API endpoint
  fetch("/api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ErrorCode === "0") {
        alert("Request successful");
        // Reference Number: " + data.RefNo
      } else {
        alert("Error: " + data.Msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}

const countElements = document.querySelectorAll(".count");

countElements.forEach((countElement) => {
  const target = parseInt(countElement.dataset.target);
  let count = 0;
  const duration = 3000; // Duration in milliseconds
  const step = Math.ceil(target / (duration / 16)); // Step value for each animation frame

  const updateCount = () => {
    count += step;
    if (count >= target) {
      // If the count exceeds or equals the target
      if (target >= 1000000) {
        countElement.textContent = "1M+"; // Display 1M+ for counts >= 1 million
      } else if (target >= 1200) {
        countElement.textContent = "1200+"; // Display in K format for counts >= 1200
      } else {
        countElement.textContent = target; // Display the target count
      }
      return;
    }
    countElement.textContent = count.toLocaleString();
    requestAnimationFrame(updateCount);
  };

  requestAnimationFrame(updateCount);
});
