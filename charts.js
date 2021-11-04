const ctx = document.querySelector('.book-genre-chart');

const data = {
    labels: [
        'Fantasy',
        'Historial Fiction',
        'Science-Fiction',
        'Horror',
        'Romance',
        'Other'
    ],
    datasets: [{
        data: [3, 0, 2, 1, 1, 0],
        backgroundColor: [
            '#623b5a',
            '#de7c5a',
            '#76949f',
            '#e26d5a',
            '#000'
        ],
    }]
};

const options = {
    plugins: {
        legend: {
            position: 'bottom',
            align: 'center',
            labels: {
            }
        },
    },
};

const config = {
    type: 'pie',
    data: data,
    options: options,
};



const bookGenrePieChart = new Chart(ctx, config);


function removeZeroLabels() {
    for (let i = 0; i <= data.labels.length; i++) {
        if (data.datasets[0].data[i] === 0) {
            data.labels.splice(i, 1);
            data.datasets[0].data.splice(i, 1);
        }
    }
}


