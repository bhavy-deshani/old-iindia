let chart;
let debounceTimer;

// INR Formatting Helper
const formatINR = (val) => new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 0
}).format(val);

const formatNum = (val) => new Intl.NumberFormat('en-IN').format(val);
const parseNum = (str) => parseInt(str.toString().replace(/,/g, '')) || 0;

// Initialize the ApexChart
// Initialize the ApexChart
function initChart() {
    const options = {
        series: [0, 0],
        chart: { type: 'donut', height: 320 },
        labels: ['Invested Amount', 'Total Earnings'],
        colors: ['#00ad41', '#005cb9'],
        legend: { position: 'bottom' },
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
                            formatter: (val) => formatINR(val)
                        },
                        total: {
                            show: true,
                            label: 'Monthly Goal',
                            formatter: () => formatINR(window.currentMonthly || 0)
                        }
                    }
                }
            }
        },
        tooltip: { 
            y: { 
                formatter: (val) => formatINR(val) 
            } 
        },
        dataLabels: { enabled: false }
    };
    chart = new ApexCharts(document.querySelector("#resultChart"), options);
    chart.render();
}

// Perform the API request based on your exact structure
async function getRetirementData() {
    const key = "bf27810f-27a3-44f3-b28d-c0a863d04ffb";
    const current_age = document.getElementById("current_age").value;
    const retirement_age = document.getElementById("retirement_age").value;
    const wealth_amount = parseNum(document.getElementById("wealth_amount").value);
    const inflation_rate = document.getElementById("inflation_rate").value;
    const expected_return = document.getElementById("expected_return").value;
    const savings_amount = parseNum(document.getElementById("savings_amount").value);

    // EXACT Request Format as requested
    const apiUrl = `https://mfapi.advisorkhoj.com/calc/getCrorepatiResult?key=${key}&current_age=${current_age}&retirement_age=${retirement_age}&wealth_amount=${wealth_amount}&inflation_rate=${inflation_rate}&expected_return=${expected_return}&savings_amount=${savings_amount}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 200) {
            renderResults(data);
        }
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}

// Map the Response JSON to UI
function renderResults(data) {
    window.currentMonthly = data.monthly_savings;
    const display = document.getElementById("resultsDisplay");

    display.innerHTML = `
        <tr>
            <td class="text-muted border-bottom">Target Wealth (Inflation Adj.)</td>
            <td class="text-end result-val border-bottom">${formatINR(data.target_wealth)}</td>
        </tr>
        <tr>
            <td class="text-muted border-bottom">Wealth Gap to Fill</td>
            <td class="text-end result-val border-bottom">${formatINR(data.target_amount)}</td>
        </tr>
        <tr>
            <td class="text-muted border-bottom">Total Invested Amount</td>
            <td class="text-end result-val border-bottom">${formatINR(data.invested_amount)}</td>
        </tr>
        <tr>
            <td class="text-muted border-bottom">Total Earnings Growth</td>
            <td class="text-end result-val border-bottom">${formatINR(data.total_earnings)}</td>
        </tr>
        <tr class="bg-light">
            <td class="fw-bold pt-3 text-success-custom">Monthly Savings Required</td>
            <td class="text-end fw-bold pt-3 text-success-custom" style="font-size: 1.2rem;">
                ${formatINR(data.monthly_savings)}
            </td>
        </tr>
    `;

    chart.updateSeries([data.invested_amount, data.total_earnings]);
}

// Sync Controls
function setupSync() {
    const config = [
        { id: 'wealth_amount', range: 'wealth_amount_range', isINR: true },
        { id: 'savings_amount', range: 'savings_amount_range', isINR: true },
        { id: 'current_age', range: 'current_age_range' },
        { id: 'retirement_age', range: 'retirement_age_range' },
        { id: 'inflation_rate', range: 'inflation_rate_range' },
        { id: 'expected_return', range: 'expected_return_range' }
    ];

    config.forEach(item => {
        const el = document.getElementById(item.id);
        const range = document.getElementById(item.range);

        const callApi = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(getRetirementData, 300);
        };

        el.addEventListener('input', () => {
            let val = item.isINR ? parseNum(el.value) : el.value;
            range.value = val;
            if (item.isINR) el.value = formatNum(val);
            callApi();
        });

        range.addEventListener('input', () => {
            el.value = item.isINR ? formatNum(range.value) : range.value;
            callApi();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initChart();
    setupSync();
    getRetirementData();
}); 