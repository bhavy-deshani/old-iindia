const sipAmountRange = document.getElementById('sipAmountRange');
const sipAmount = document.getElementById('sipAmount');
const interestRateRange = document.getElementById('interestRateRange');
const interestRate = document.getElementById('interestRate');
const periodRange = document.getElementById('periodRange');
const period = document.getElementById('period');

// Format currency in INR
function formatCurrency(value) {
    return new Intl.NumberFormat('en-IN', { 
        style: 'currency', 
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// Format number to Indian comma format
function formatIndianNumber(num) {
    return new Intl.NumberFormat('en-IN').format(num);
}

// Parse Indian number format back to number
function parseIndianNumber(str) {
    return parseInt(str.replace(/,/g, '')) || 0;
}

// Update input fields with formatted values
function updateInputFormats() {
    const currentValue = parseIndianNumber(sipAmount.value);
    sipAmount.value = formatIndianNumber(currentValue);
}

// Add event listeners with improved UX
function setupEventListeners() {
    // SIP Amount handling with INR formatting
    sipAmountRange.addEventListener('input', function() {
        const value = this.value;
        sipAmount.value = formatIndianNumber(value);
        debounceCalculateSIP();
    });

    sipAmount.addEventListener('input', function() {
        const parsedValue = parseIndianNumber(this.value);
        if (!isNaN(parsedValue)) {
            sipAmountRange.value = parsedValue;
            this.value = formatIndianNumber(parsedValue);
            debounceCalculateSIP();
        }
    });

    sipAmount.addEventListener('focus', function() {
        this.value = parseIndianNumber(this.value);
        this.classList.add('input-highlight');
    });

    sipAmount.addEventListener('blur', function() {
        this.value = formatIndianNumber(this.value);
        this.classList.remove('input-highlight');
    });

    // Other inputs
    interestRateRange.addEventListener('input', function() {
        interestRate.value = this.value;
        debounceCalculateSIP();
    });

    interestRate.addEventListener('input', function() {
        interestRateRange.value = this.value;
        debounceCalculateSIP();
    });

    periodRange.addEventListener('input', function() {
        period.value = this.value;
        debounceCalculateSIP();
    });

    period.addEventListener('input', function() {
        periodRange.value = this.value;
        debounceCalculateSIP();
    });
}

// Debounce function to limit API calls
let debounceTimeout;
function debounceCalculateSIP() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(calculateSIP, 300);
}

// Calculate SIP function
// Calculate SIP function
// Calculate SIP function
function calculateSIP() {
    const sipAmountValue = parseIndianNumber(sipAmount.value) || sipAmountRange.value;
    const interestRateValue = interestRate.value;
    const periodInYears = period.value;
    const totalMonths = periodInYears * 12;
    	const apiKey = "mfapikey";
    // const apiKey = "bf27810f-27a3-44f3-b28d-c0a863d04ffb";
    // URL mein ab 'totalMonths' bhejein
    const reqtype = `?reqtype=calc/getSIPCalcResult?sip_amount=${sipAmountValue}&interest_rate=${interestRateValue}&period=${totalMonths}&key=${apiKey}`;
    // const reqtype = `?sip_amount=${sipAmountValue}&interest_rate=${interestRateValue}&period=${totalMonths}&key=${apiKey}`;
    // const apiUrl = " https://mfapi.advisorkhoj.com/calc/getSIPCalcResult";
        const apiUrl ="https://www.integratedindia.in/API/ADKAPI.aspx"

    
    fetch(apiUrl + reqtype)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                document.getElementById('investedAmount').innerText = formatCurrency(data.invested_amount);
                document.getElementById('growthValue').innerText = formatCurrency(data.growth_value);
                document.getElementById('maturityAmount').innerText = formatCurrency(data.maturity_amount);
                updateChart(data);
            } else {
                console.error('Error calculating SIP:', data);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Chart initialization and update
let chart;
function initChart() {
    const options = {
        series: [0, 0],
        chart: {
            type: 'donut',
            height: 350,
            fontFamily: 'inherit'
        },
        labels: ['Invested Amount', 'Wealth Gained'],
        colors: ['#00ad41', '#005cb9'],
        legend: {
            position: 'top', // Moves legend to the top to avoid overlapping the table
            horizontalAlign: 'center'
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        value: {
                            show: true,
                            fontSize: '20px',
                            fontWeight: 600,
                            // This formats the individual slice value on hover in the center
                            formatter: function (val) {
                                return formatCurrency(val);
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total Value',
                            color: '#64748b',
                            // This formats the total sum in the center
                            formatter: function (w) {
                                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                return formatCurrency(sum);
                            }
                        }
                    }
                }
            }
        },
        // This formats the popup box when you hover your mouse
        tooltip: {
            y: {
                formatter: function (val) {
                    return formatCurrency(val);
                }
            }
        },
        dataLabels: {
            enabled: false
        }
    };

    chart = new ApexCharts(document.querySelector("#sipChart"), options);
    chart.render();
}
// Optimized Update Function
function updateChart(data) {
    if (chart) {
        // Use updateSeries for smooth animation instead of recreating the chart
        chart.updateSeries([
            data.invested_amount, 
            data.growth_value
        ]);
    }
}

// Modify your existing initCalculator to include initChart
function initCalculator() {
    setupEventListeners();
    updateInputFormats();
    initChart(); // Initialize ApexCharts
    calculateSIP();
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initCalculator);