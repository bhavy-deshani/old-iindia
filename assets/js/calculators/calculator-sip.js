const sipAmountRange = document.getElementById('sipAmountRange');
const sipAmount = document.getElementById('sipAmount');
const interestRateRange = document.getElementById('interestRateRange');
const interestRate = document.getElementById('interestRate');
const periodRange = document.getElementById('periodRange');
const period = document.getElementById('period');

function formatCurrency(value) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
}

sipAmountRange.addEventListener('input', function () {
    sipAmount.value = this.value;
    debounceCalculateSIP();
});

sipAmount.addEventListener('input', function () {
    sipAmountRange.value = this.value;
    debounceCalculateSIP();
});

interestRateRange.addEventListener('input', function () {
    interestRate.value = this.value;
    debounceCalculateSIP();
});

interestRate.addEventListener('input', function () {
    interestRateRange.value = this.value;
    debounceCalculateSIP();
});

periodRange.addEventListener('input', function () {
    period.value = this.value;
    debounceCalculateSIP();
});

period.addEventListener('input', function () {
    periodRange.value = this.value;
    debounceCalculateSIP();
});

// Debounce function to limit API calls
let debounceTimeout;
function debounceCalculateSIP() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(calculateSIP, 300); // Adjust the delay as needed
}

function calculateSIP() {
    const sipAmount = sipAmountRange.value;
    const interestRate = interestRateRange.value;
    const period = periodRange.value;
	const apiKey = "mfapikey";
    const reqtype = `?reqtype=calc/getSIPCalcResult?sip_amount=${sipAmount}&interest_rate=${interestRate}&period=${period*12}&key=${apiKey}`;
    const apiUrl ="https://www.integratedindia.in/API/ADKAPI.aspx"
      
    fetch(apiUrl+reqtype)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                document.getElementById('investedAmount').innerText = formatCurrency(data.invested_amount);
                document.getElementById('growthValue').innerText = formatCurrency(data.growth_value);
                document.getElementById('maturityAmount').innerText = formatCurrency(data.maturity_amount);

                updateChart(data);
            } else {
                // Handle error here, e.g., show an error message
            }
        });
}

let chart;

function updateChart(data) {
    const ctx = document.getElementById('sipChart').getContext('2d');
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Invested Amount', 'Growth Value'],
            datasets: [{
                data: [data.invested_amount, data.growth_value],
                backgroundColor: ['#005CB9', '#00AE42'],
                borderWidth: 0,
                hoverOffset: 8
            }]
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
                            return ctx.label + ': ' + formatCurrency(ctx.raw);
                        }
                    }
                }
            }
        }
    });
}

// Initial calculation
calculateSIP();
