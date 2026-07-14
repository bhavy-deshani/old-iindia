let chart;
let debounceTimer;

// INR Formatting Helper
const formatINR = (val) => new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 0
}).format(val);

const formatNum = (val) => new Intl.NumberFormat('en-IN').format(val);
const parseNum = (str) => parseInt(str.toString().replace(/,/g, '')) || 0;

function initChart() {
    const canvas = document.getElementById('resultChart');
    if (!canvas) return; // Wait for DOM if not ready
    const ctx = canvas.getContext('2d');
    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Invested Amount', 'Total Earnings'],
            datasets: [{
                data: [0, 0],
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
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + formatINR(tooltipItem.raw);
                        }
                    }
                }
            }
        }
    });
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
        <div class="gsc-result-row">
            <span class="gsc-result-label">Target Wealth (Inflation Adj.)</span>
            <span class="gsc-result-val">${formatINR(data.target_wealth)}</span>
        </div>
        <div class="gsc-result-row">
            <span class="gsc-result-label">Wealth Gap to Fill</span>
            <span class="gsc-result-val">${formatINR(data.target_amount)}</span>
        </div>
        <div class="gsc-result-row">
            <span class="gsc-result-label">Total Invested Amount</span>
            <span class="gsc-result-val">${formatINR(data.invested_amount)}</span>
        </div>
        <div class="gsc-result-row">
            <span class="gsc-result-label">Total Earnings Growth</span>
            <span class="gsc-result-val">${formatINR(data.total_earnings)}</span>
        </div>
        <div class="gsc-result-row">
            <span class="gsc-result-label fw-bold">Monthly Savings Required</span>
            <span class="gsc-result-val highlight">${formatINR(data.monthly_savings)}</span>
        </div>
    `;

    const mobSavings = document.getElementById("mobileMonthlySavings");
    if (mobSavings) mobSavings.innerHTML = formatINR(data.monthly_savings);

    const colInvested = document.getElementById("colInvestedAmount");
    if (colInvested) colInvested.innerHTML = formatINR(data.invested_amount);

    const colEarnings = document.getElementById("colTotalEarnings");
    if (colEarnings) colEarnings.innerHTML = formatINR(data.total_earnings);

    const desktopMonthlyGoal = document.getElementById("desktop_monthly_goal");
    if (desktopMonthlyGoal) desktopMonthlyGoal.innerHTML = formatINR(data.monthly_savings);

    if (chart) {
        chart.data.datasets[0].data = [data.invested_amount, data.total_earnings];
        chart.update();
    }
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