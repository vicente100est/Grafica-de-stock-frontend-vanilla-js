const url = "https://localhost:7220/stock"
const ctx = document.getElementById('myChart').getContext('2d');

fetch(url).then(res => res.json()).then(data => {
    console.log(data)
    const beers = data.map(e => e.name)
    const quantity = data.map(e => e.quantity)
    const colors = data.map(e => {
        return `
        rgba(${getRandomColor(255, 0)},
        ${getRandomColor(255, 0)},
        ${getRandomColor(255, 0)}, 1)`
    });

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: beers,
            datasets: [{
                label: 'Cervezas',
                data: quantity,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

function getRandomColor (mas, min){
    return Math.random() * (mas - min) + min;
}
