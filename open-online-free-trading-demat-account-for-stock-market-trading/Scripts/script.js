
function animateCount() {
  const countElements = document.querySelectorAll(".count");

  countElements.forEach((countElement) => {
    const target = parseInt(countElement.dataset.target);
    const suffix = countElement.dataset.suffix || "";
    let count = 0;
    const duration = 3000;
    const step = Math.ceil(target / (duration / 16));

    const updateCount = () => {
      count += step;
      if (count >= target) {
        if (target >= 1000000) {
          countElement.textContent = "1M+";
        } else if (target >= 1200) {
          countElement.textContent = "1200+";
        } else {
          countElement.textContent = target;
        }
        return;
      }
      countElement.textContent = count.toLocaleString() + suffix;
      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  });
}
window.addEventListener("load", animateCount);
let otpTimer;
let resendButton;

function requestOTP() {
  if (!validateInputs()) return;

  const mobile = document.getElementById("mobile").value;

  fetch("../api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: "MFDEMAT",
      Mode: "OTPREQUEST",
      Mobile: mobile,
    }),
  } )
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
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
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

  fetch("../api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: "MFDEMAT",
      Mode: "OTPVERIFY",
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

  fetch("../api/CDSLAPI.aspx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: "MFDEMAT",
      Mode: "DATASAVE",
      Name: name,
  Email: "User@example.com",
      Mobile: mobile,
      PinCode: pincode,
      SaveInd: "2",
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
 // saveData();

  // Redirect to the specified URL
  window.location.href =
    "https://www.integratedindia.in/sp/instaAcOpen/EKYCInstantAcOpen.aspx?Mobile";
}
function OldsaveData() {
  // Add your logic to save data here
  // For example:
  // console.log("Data saved successfully.");
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

document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

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

    // Create the JSON data
    const formData = {
      Type: "MFHELP",
      Mode: "DATASAVE",
      Name: name,
      Mobile: mobile,
      Email: email,
      PinCode: pincode,
      SaveInd: "2",
    };

    // Send the data to the API endpoint
    fetch("../api/CDSLAPI.aspx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ErrorCode === "0") {
          alert("Request successful.");
        } else {
          alert("Error: " + data.Msg);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });


// slider

document.addEventListener("DOMContentLoaded", function () {
const wrapper = document.querySelector(".card-wrapper");
const slides = document.querySelectorAll(".testimonials-card");
const nextButton = document.querySelector(".swiper-button-next");
const prevButton = document.querySelector(".swiper-button-prev");
const pagination = document.querySelector(".swiper-pagination");

let currentSlide = 0;
const slideCount = slides.length;

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  const offset = -currentSlide * slideWidth;
  wrapper.style.transform = `translateX(${offset}px)`;

  if (pagination) {
    Array.from(pagination.children).forEach((bullet, index) => {
      bullet.classList.toggle("active", index === currentSlide);
    });
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlidePosition();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Create pagination bullets
if (pagination) {
  for (let i = 0; i < slideCount; i++) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.addEventListener("click", () => {
      currentSlide = i;
      updateSlidePosition();
    });
    pagination.appendChild(bullet);
  }
}

// Auto-slide functionality
setInterval(nextSlide, 5000); // Change slide every 2 seconds

// Initialize the first slide position
updateSlidePosition();


const wrapper3 = document.querySelector(".swiper3 .swiper-wrapper");
const slides3 = document.querySelectorAll(".swiper3 .swiper-slide");
const nextButton3 = document.querySelector(".swiper3 .swiper-button-next-2");
const prevButton3 = document.querySelector(".swiper3 .swiper-button-prev-2");

let currentSlide3 = 0;

function updateSlidePosition3() {
  const slideWidth3 = slides3[0].clientWidth;
  const offset3 = -currentSlide3 * slideWidth3;
  wrapper3.style.transform = `translateX(${offset3}px)`;
}

function nextSlide3() {
  currentSlide3 = (currentSlide3 + 1) % slides3.length;
  updateSlidePosition3();
}

function prevSlide3() {
  currentSlide3 = (currentSlide3 - 1 + slides3.length) % slides3.length;
  updateSlidePosition3();
}

nextButton3.addEventListener("click", nextSlide3);
prevButton3.addEventListener("click", prevSlide3);

// Auto-slide functionality with a slower transition
setInterval(); // Change slide every 3 seconds

// Initialize the first slide position
updateSlidePosition3();
});
