var colors = [
    "green",
    "yellow",
    "purple",
    "orange",
    "red"
    ];

function bgChange() {
    document.body.classList = colors[Math.floor(Math.random()*colors.length)];
}