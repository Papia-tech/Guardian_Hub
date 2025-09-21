const baseColor = getComputedStyle(document.body)
                    .getPropertyValue('--base-color').trim();
                    
const ctx = document.getElementById('dataChart').getContext('2d');
const dataChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Device Activity',
            data: [12, 19, 8, 15, 10, 20],
            borderColor: baseColor,
            backgroundColor: baseColor + '33', // add transparency
            tension: 0.4,
            fill: true,
            pointBackgroundColor: baseColor,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: baseColor }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleColor: baseColor,
                bodyColor: '#ffffff'
            }
        },
        scales: {
            x: { ticks: { color: baseColor }, grid: { color: baseColor + '1A' } },
            y: { ticks: { color: baseColor }, grid: { color: baseColor + '1A' } }
        }
    }
});

function setColor(input) {
    const baseColor = input.value;
    document.body.style.setProperty('--base-color', baseColor);

    // Update chart colors dynamically
    dataChart.data.datasets[0].borderColor = baseColor;
    dataChart.data.datasets[0].backgroundColor = baseColor + '33';
    dataChart.data.datasets[0].pointBackgroundColor = baseColor;

    dataChart.options.plugins.legend.labels.color = baseColor;
    dataChart.options.plugins.tooltip.titleColor = baseColor;
    dataChart.options.scales.x.ticks.color = baseColor;
    dataChart.options.scales.x.grid.color = baseColor + '1A';
    dataChart.options.scales.y.ticks.color = baseColor;
    dataChart.options.scales.y.grid.color = baseColor + '1A';

    dataChart.update(); // Apply changes
}

