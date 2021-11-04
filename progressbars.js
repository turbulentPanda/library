// Book Count Progress Bar
const percentage = 4 / 7;
const bookCountProgressBar = new ProgressBar.Circle('.book-count-progressbar', {
    color: '#623b5a',
    strokeWidth: 9,
    trailColor: 'white',
    text: {
        value: `You have read <span class="myspan">${(percentage * 100).toFixed(0)}%</span><br>of your bookshelf`,
        className: 'bookCountProgressBarText',
    },
});
bookCountProgressBar.animate(percentage, {
    duration: 750,
});