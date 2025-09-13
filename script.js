const ctx = document.getElementById('dataChart').getContext('2d');
const dataChart = new Chart(ctx, {
    type: 'line', // change to 'bar' or 'pie' if needed
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Device Activity',
            data: [12, 19, 8, 15, 10, 20],
            borderColor: '#FFD700',
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#FFD700',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: '#FFD700' }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleColor: '#FFD700',
                bodyColor: '#ffffff'
            }
        },
        scales: {
            x: { ticks: { color: '#FFD700' }, grid: { color: 'rgba(255,215,0,0.1)' } },
            y: { ticks: { color: '#FFD700' }, grid: { color: 'rgba(255,215,0,0.1)' } }
        }
    }
});