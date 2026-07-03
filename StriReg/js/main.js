// Form navigation and validation
let selectedServiceType = null;
let selectedDate = null;
let selectedTime = null;
let hasScheduled = false; // Add this at the top with other variables

function nextSection(current) {
    // Hide current section
    if (current === 3) {
        document.getElementById(`section3-${selectedServiceType}`).classList.remove('active');
    } else {
        document.getElementById(`section${current}`).classList.remove('active');
    }

    // Show next section
    if (current === 2) {
        document.getElementById(`section3-${selectedServiceType}`).classList.add('active');
    } else if (current === 3) {
        // After section 3, go directly to confirmation (section 5)
        document.getElementById('section5').classList.add('active');
        updateProgress(4); // Update progress to 100%
        updateStepIndicators(4);
        completeRegistration();
    } else {
        document.getElementById(`section${current + 1}`).classList.add('active');
    }

    updateProgress(current + 1);
    updateStepIndicators(current + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevSection(current) {
    // Hide current section
    if (current === 3) {
        document.getElementById(`section3-${selectedServiceType}`).classList.remove('active');
    } else {
        document.getElementById(`section${current}`).classList.remove('active');
    }

    // Show previous section
    if (current === 3) {
        document.getElementById('section2').classList.add('active');
    } else {
        document.getElementById(`section${current - 1}`).classList.add('active');
    }

    updateProgress(current - 1);
    updateStepIndicators(current - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress(section) {
    const progress = (section / 4) * 100;
    document.getElementById('stepProgress').style.width = `${progress}%`;
}

function updateStepIndicators(currentSection) {
    // Reset all steps
    for (let i = 1; i <= 4; i++) {
        const step = document.getElementById(`stepIndicator${i}`);
        step.classList.remove('active', 'completed');
    }

    // Mark previous steps as completed and current as active
    for (let i = 1; i <= currentSection; i++) {
        const step = document.getElementById(`stepIndicator${i}`);
        if (i < currentSection) {
            step.classList.add('completed');
        } else {
            step.classList.add('active');
        }
    }
}

function selectServiceType(type) {
    selectedServiceType = type;

    $("#HideType").val(selectedServiceType)

    // Update UI for selected service type
    document.querySelectorAll('.service-type-card').forEach(card => {
        card.classList.remove('selected');
    });

    const selectedCard = document.querySelector(`input[value="${type}"]`).closest('.service-type-card');
    selectedCard.classList.add('selected');
}

function validateSection(section) {
    let isValid = true;

    if (section === 1) {
        const requiredFields = ['name', 'phone', 'pincode', 'dob', 'maritalStatus'];
        requiredFields.forEach(field => {
            const element = document.getElementById(field);
            if (!element.value.trim()) {
                isValid = false;
                element.classList.add('animate__animated', 'animate__headShake');
                setTimeout(() => {
                    element.classList.remove('animate__animated', 'animate__headShake');
                }, 1000);

                // For select dropdown, also highlight the container
                if (field === 'maritalStatus') {
                    const container = element.closest('.form-group');
                    container.classList.add('animate__animated', 'animate__headShake');
                    setTimeout(() => {
                        container.classList.remove('animate__animated', 'animate__headShake');
                    }, 1000);
                }
            }
        });

        // Additional validation for phone number format (10 digits)
        const phone = document.getElementById('phone').value.trim();
        if (phone && !/^\d{10}$/.test(phone)) {
            isValid = false;
            const phoneField = document.getElementById('phone');
            phoneField.classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => {
                phoneField.classList.remove('animate__animated', 'animate__headShake');
            }, 1000);
        }

        // Additional validation for DOB (should be in the past)
        const dob = document.getElementById('dob').value;
        if (dob && !/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
            isValid = false;
            const dobField = document.getElementById('dob');
            dobField.classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => {
                dobField.classList.remove('animate__animated', 'animate__headShake');
            }, 1000);
        }


        // Additional validation for pincode (6 digits)
        const pincode = document.getElementById('pincode').value.trim();
        if (pincode && !/^\d{6}$/.test(pincode)) {
            isValid = false;
            const pincodeField = document.getElementById('pincode');
            pincodeField.classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => {
                pincodeField.classList.remove('animate__animated', 'animate__headShake');
            }, 1000);
        }
    }

    if (section === 2) {
        if (!selectedServiceType) {
            isValid = false;
            document.querySelector('.card-grid').classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => {
                document.querySelector('.card-grid').classList.remove('animate__animated', 'animate__headShake');
            }, 1000);
        }
    }

    if (section === 3) {
        // Check if at least one checkbox is selected in the current section
        const currentSectionId = `section3-${selectedServiceType}`;
        const checkboxes = document.querySelectorAll(`#${currentSectionId} input[type="checkbox"]`);
        let atLeastOneChecked = false;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) atLeastOneChecked = true;
        });

        // Check referral source
        const referralSource = document.getElementById(`referralSource-${selectedServiceType}`);
        if (!referralSource.value) {
            isValid = false;
            referralSource.classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => {
                referralSource.classList.remove('animate__animated', 'animate__headShake');
            }, 1000);
        }
       

        // Check referral details if "Other" is selected
        if (referralSource.value === 'Other') {
            const referralDetails = document.getElementById(`referralDetails-${selectedServiceType}`);
            if (!referralDetails.value.trim()) {
                isValid = true;
                referralDetails.classList.add('animate__animated', 'animate__headShake');
                setTimeout(() => {
                    referralDetails.classList.remove('animate__animated', 'animate__headShake');
                }, 1000);
            }
        }
       
        // In the section === 3 validation part
        if (referralSource.value === 'Integrated Employee') {
            const employeeId = document.getElementById(`employeeId-${selectedServiceType}`).value.trim();
            if (!employeeId) {
                isValid = false;
                const employeeIdField = document.getElementById(`employeeId-${selectedServiceType}`);
                employeeIdField.classList.add('animate__animated', 'animate__headShake');
                setTimeout(() => {
                    employeeIdField.classList.remove('animate__animated', 'animate__headShake');
                }, 1000);
            }
        } else if (referralSource.value === 'Friend/Relative') {
            const customerId = document.getElementById(`customerId-${selectedServiceType}`).value.trim();
            if (!customerId) {
                isValid = true;
                const customerIdField = document.getElementById(`customerId-${selectedServiceType}`);
                customerIdField.classList.add('animate__animated', 'animate__headShake');
                setTimeout(() => {
                    customerIdField.classList.remove('animate__animated', 'animate__headShake');
                }, 1000);
            }
        }
       
        if (!atLeastOneChecked) {
            isValid = false;
            const currentSection = document.getElementById(currentSectionId);
            currentSection.classList.add('animate__animated', 'animate__headShake');
            alert('Please select at least one product.');

            setTimeout(() => {
                currentSection.classList.remove('animate__animated', 'animate__headShake');
            }, 1000);
        }
        else if($("#HideRef").val()=="")
        {
            alert("Select Referral Source");
        }
        else
        {
            SaveClick();
        }


    }
    
    if (isValid) {
        nextSection(section);
    } else {
        // Shake the continue button to indicate error
        const continueBtn = document.querySelector(`#section${section} .btn-primary`);
        continueBtn.classList.add('animate__animated', 'animate__headShake');
        setTimeout(() => {
            continueBtn.classList.remove('animate__animated', 'animate__headShake');
        }, 1000);
    }
    const dob = document.getElementById('dob').value;
    if (dob && !/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
        isValid = false;
        const dobField = document.getElementById('dob');
        dobField.classList.add('animate__animated', 'animate__headShake');
        setTimeout(() => {
            dobField.classList.remove('animate__animated', 'animate__headShake');
        }, 1000);
    }

}

// Toggle checkbox cards
function toggleCheckbox(id) {
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
    const card = checkbox.closest('.service-card');
    card.classList.toggle('selected', checkbox.checked);
}

function toggleRadio(id) {
    const radio = document.getElementById(id);
    if (!radio.checked) {
        radio.checked = true;
        document.querySelectorAll(`input[name="${radio.name}"]`).forEach(r => {
            const parent = r.closest('.age-card') || r.closest('.checkbox-card');
            if (parent) parent.classList.remove('selected');
        });
        const parent = radio.closest('.age-card') || radio.closest('.checkbox-card');
        if (parent) parent.classList.add('selected');
    }
}

// Form submission
function completeRegistration() {
    // Generate token number in ACK-123456 format
    const tokenNumber = 'ACK-' + Math.floor(100000 + Math.random() * 900000);
    const referralSource = document.getElementById(`referralSource-${selectedServiceType}`).value;
    const referralDetails = document.getElementById(`referralDetails-${selectedServiceType}`)?.value
    // Display token number
    // document.getElementById('tokenNumber').textContent = tokenNumber;
    const dob = document.getElementById('dob').value;
    const age = dob ? calculateAge(dob) : 'Not specified';

    // Get selected services based on service type
    let selectedInvestments = [];
    let selectedGoals = [];
    let selectedInterests = [];
    let selectedLearningModes = [];

    if (selectedServiceType === 'financial') {
        document.querySelectorAll('#section3-financial input[name="investments"]:checked').forEach(checkbox => {
            selectedInvestments.push(checkbox.value);
        });
        document.querySelectorAll('#section3-financial input[name="goals"]:checked').forEach(checkbox => {
            selectedGoals.push(checkbox.value);
        });
        document.querySelectorAll('#section3-financial input[name="learningMode"]:checked').forEach(checkbox => {
            selectedLearningModes.push(checkbox.value);
        });
    } else if (selectedServiceType === 'additional') {
        document.querySelectorAll('#section3-additional input[name="interests"]:checked').forEach(checkbox => {
            selectedInterests.push(checkbox.value);
        });
        document.querySelectorAll('#section3-additional input[name="learningMode"]:checked').forEach(checkbox => {
            selectedLearningModes.push(checkbox.value);
        });
    } else if (selectedServiceType === 'both') {
        document.querySelectorAll('#section3-both input[name="investments"]:checked').forEach(checkbox => {
            selectedInvestments.push(checkbox.value);
        });
        document.querySelectorAll('#section3-both input[name="goals"]:checked').forEach(checkbox => {
            selectedGoals.push(checkbox.value);
        });
        document.querySelectorAll('#section3-both input[name="interests"]:checked').forEach(checkbox => {
            selectedInterests.push(checkbox.value);
        });
        document.querySelectorAll('#section3-both input[name="learningMode"]:checked').forEach(checkbox => {
            selectedLearningModes.push(checkbox.value);
        });
    }

    // Display registration details
    const registrationDetails = document.getElementById('registrationDetails');
    registrationDetails.innerHTML = `
<p><strong>Name:</strong> ${document.getElementById('name').value}</p>
<p><strong>Email:</strong> ${document.getElementById('email').value || 'Not provided'}</p>
<p><strong>Phone:</strong> ${document.getElementById('phone').value}</p>
<p><strong>Location:</strong> ${document.getElementById('pincode').value}</p>
<p><strong>Date of Birth:</strong> ${document.getElementById('dob').value}</p>
<p><strong>Age:</strong> ${age}</p>
<p><strong>Marital Status:</strong> ${document.getElementById('maritalStatus').value}</p>
<p><strong>Referral Source:</strong> ${referralSource}</p>
${referralSource === 'Integrated Employee' ? `<p><strong>Employee ID:</strong> ${document.getElementById(`employeeId-${selectedServiceType}`).value}</p>` : ''}
${referralSource === 'Friend/Relative' ? `<p><strong>Full Name:</strong> ${document.getElementById(`customerId-${selectedServiceType}`).value}</p>` : ''}
${referralSource === 'Other' ? `<p><strong>Referral Details:</strong> ${referralDetails}</p>` : ''}
`;

    if (selectedInvestments.length > 0) {
        registrationDetails.innerHTML += `
<p><strong>Investment Experience:</strong></p>
<ul style="margin-left: 20px; margin-top: 5px;">
${selectedInvestments.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
    }

    if (selectedGoals.length > 0) {
        registrationDetails.innerHTML += `
<p><strong>Have you invested in:</strong></p>
<ul style="margin-left: 20px; margin-top: 5px;">
${selectedGoals.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
    }
    if (selectedLearningModes.length > 0) {
        registrationDetails.innerHTML += `
<p><strong>Preferred Learning Modes:</strong></p>
<ul style="margin-left: 20px; margin-top: 5px;">
${selectedLearningModes.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
    }
    if (selectedInterests.length > 0) {
        registrationDetails.innerHTML += `
<p><strong>Non-Financial Interests:</strong></p>
<ul style="margin-left: 20px; margin-top: 5px;">
${selectedInterests.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
    }



    // Add celebration effect
    document.querySelector('.container').classList.add('animate__animated', 'animate__pulse');
}

function showScheduleForm() {
    document.getElementById('section5').classList.remove('active');
    document.getElementById('section6').classList.add('active');
    generateDateOptions('dateOptionsLater');
    generateTimeSlots('timeSlotsLater');
}

function backToConfirmation() {
    document.getElementById('section6').classList.remove('active');
    document.getElementById('section5').classList.add('active');

    // Update the button text if scheduling was done
    const scheduleBtn = document.querySelector('#section5 .btn-primary');
    if (hasScheduled) {
        scheduleBtn.innerHTML = '<span>Re-Schedule Appointment</span>';
    }
}

function submitSchedule() {
    const selectedDateElement = document.querySelector('#dateOptionsLater .date-option.selected');
    const selectedTimeElement = document.querySelector('#timeSlotsLater .time-slot.selected');

    if (!selectedDateElement || !selectedTimeElement) {
        alert('Please select both date and time');
        return;
    }
    else
    {
        SaveAppointment();
    }

    // Store the new schedule
    currentSchedule = {
        date: `${selectedDateElement.querySelector('.day-name').textContent} ${selectedDateElement.querySelector('.date-number').textContent} ${selectedDateElement.querySelector('.month-name').textContent}`,
        time: selectedTimeElement.textContent
    };

    // Update confirmation with schedule info
    updateScheduleDetails();

    // Set the flag to indicate scheduling is done
    hasScheduled = true;

    // Show confirmation again
    backToConfirmation();

    // Show success message
    alert('Appointment scheduled successfully!');
}
function updateScheduleDetails() {
    const detailsDiv = document.getElementById('registrationDetails');
    const existingContent = detailsDiv.innerHTML;

    // Remove any existing schedule information
    let cleanContent = existingContent.replace(/<p><strong>Scheduled Date:<\/strong>.*?<\/p>/g, '')
        .replace(/<p><strong>Scheduled Time:<\/strong>.*?<\/p>/g, '');

    // Add the current schedule
    if (currentSchedule) {
        cleanContent += `
<p><strong>Scheduled Date:</strong> ${currentSchedule.date}</p>
<p><strong>Scheduled Time:</strong> ${currentSchedule.time}</p>
`;
    }

    detailsDiv.innerHTML = cleanContent;
}
function generateDateOptions(containerId) {
    const dateOptionsContainer = document.getElementById(containerId);
    dateOptionsContainer.innerHTML = '';

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Generate options for today + next 6 days (7 days total)
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const dateElement = document.createElement('div');
        dateElement.className = 'date-option';
        if (i === 0) {
            dateElement.innerHTML = `
<div class="day-name">Today</div>
<div class="date-number">${date.getDate()}</div>
<div class="month-name">${monthNames[date.getMonth()]}</div>
`;
        } else {
            dateElement.innerHTML = `
<div class="day-name">${dayNames[date.getDay()]}</div>
<div class="date-number">${date.getDate()}</div>
<div class="month-name">${monthNames[date.getMonth()]}</div>
`;
        }

        dateElement.addEventListener('click', () => {
            // Remove selection from all dates
            document.querySelectorAll(`#${containerId} .date-option`).forEach(d => {
                d.classList.remove('selected');
            });

            // Add selection to clicked date
            dateElement.classList.add('selected');
            selectedDate = date;

            // Update available time slots for the selected date
            generateTimeSlots('timeSlotsLater');
        });

        dateOptionsContainer.appendChild(dateElement);
    }

    // Select today by default if not already selected
    if (!document.querySelector(`#${containerId} .date-option.selected`)) {
        dateOptionsContainer.firstChild.click();
    }
}

function generateTimeSlots(containerId) {
    const timeSlotsContainer = document.getElementById(containerId);
    timeSlotsContainer.innerHTML = '';

    // Different time slots for morning and afternoon
    const morningSlots = [
        '09:00 AM', '09:30 AM',
        '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM'
    ];

    const afternoonSlots = [
        '12:00 PM', '12:30 PM',
        '01:00 PM', '01:30 PM',
        '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM',
        '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM'
    ];

    // For today, disable past time slots
    const now = new Date();
    const isToday = selectedDate && selectedDate.toDateString() === new Date().toDateString();

    // Add morning slots
    morningSlots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;

        if (isToday) {
            const [time, period] = slot.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'PM' && hours !== 12) hours += 12;
            if (period === 'AM' && hours === 12) hours = 0;

            const slotTime = new Date();
            slotTime.setHours(hours, minutes, 0, 0);

            if (slotTime < now) {
                slotElement.classList.add('disabled');
                slotElement.title = 'This time slot has passed';
            }
        }

        if (selectedTime === slot) {
            slotElement.classList.add('selected');
        }

        if (!slotElement.classList.contains('disabled')) {
            slotElement.addEventListener('click', () => {
                // Remove selection from all time slots
                document.querySelectorAll(`#${containerId} .time-slot`).forEach(s => {
                    s.classList.remove('selected');
                });

                // Add selection to clicked slot
                slotElement.classList.add('selected');
                selectedTime = slot;
            });
        }

        timeSlotsContainer.appendChild(slotElement);
    });

    // Add afternoon slots
    afternoonSlots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;

        if (isToday) {
            const [time, period] = slot.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'PM' && hours !== 12) hours += 12;
            if (period === 'AM' && hours === 12) hours = 0;

            const slotTime = new Date();
            slotTime.setHours(hours, minutes, 0, 0);

            if (slotTime < now) {
                slotElement.classList.add('disabled');
                slotElement.title = 'This time slot has passed';
            }
        }

        if (selectedTime === slot) {
            slotElement.classList.add('selected');
        }

        if (!slotElement.classList.contains('disabled')) {
            slotElement.addEventListener('click', () => {
                // Remove selection from all time slots
                document.querySelectorAll(`#${containerId} .time-slot`).forEach(s => {
                    s.classList.remove('selected');
                });

                // Add selection to clicked slot
                slotElement.classList.add('selected');
                selectedTime = slot;
            });
        }

        timeSlotsContainer.appendChild(slotElement);
    });
}

function resetForm() {
    // Reset the scheduling flag and current schedule
    hasScheduled = false;
    currentSchedule = null;

    // Reset to first section
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('section1').classList.add('active');
    updateProgress(1);
    updateStepIndicators(1);

    // Reset form fields
    document.getElementById('registrationForm').reset();

    // Reset selections
    selectedServiceType = null;
    document.querySelectorAll('.service-type-card').forEach(card => {
        card.classList.remove('selected');
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('selected');
    });

    document.querySelectorAll('.age-card').forEach(card => {
        card.classList.remove('selected');
    });

    document.querySelectorAll('.checkbox-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Reset calendar and time selection
    selectedDate = null;
    selectedTime = null;

    // Remove animations
    document.querySelector('.container').classList.remove('animate__animated', 'animate__pulse');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function calculateAge(dobString) {
    // Split the dd-mm-yyyy string into day, month, year
    const parts = dobString.split('-');
    if (parts.length !== 3) return 'Invalid date';

    const dob = new Date(parts[2], parts[1] - 1, parts[0]); // Note: months are 0-indexed
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}
// Initialize form on load
document.addEventListener('DOMContentLoaded', function () {
    updateStepIndicators(1);
});

function toggleReferralDetails(sectionType) {

    $("#HideRef").val(sectionType)

    const referralSource = document.getElementById(`referralSource-${sectionType}`);
    const employeeIdContainer = document.getElementById(`employeeIdContainer-${sectionType}`);
    const customerIdContainer = document.getElementById(`customerIdContainer-${sectionType}`);
    const referralDetailsContainer = document.getElementById(`referralDetailsContainer-${sectionType}`);

    // Hide all containers first
    employeeIdContainer.style.display = 'none';
    customerIdContainer.style.display = 'none';
    referralDetailsContainer.style.display = 'none';

    // Show appropriate container based on selection
    if (referralSource.value === 'Integrated Employee') {
        employeeIdContainer.style.display = 'block';
    } else if (referralSource.value === 'Friend/Relative') {
        customerIdContainer.style.display = 'block';
    } else if (referralSource.value === 'Other') {
        referralDetailsContainer.style.display = 'block';
    }
}

