var colors = [
    "blue",
    "yellow",
    "red"
    ];

function bgChange() {
    document.body.classList = colors[Math.floor(Math.random()*colors.length)];
}