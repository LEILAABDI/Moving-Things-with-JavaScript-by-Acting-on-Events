// Your code here
// index.js
const DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
    const left = positionToInteger(DODGER.style.left);

    if (left > 0) {
        DODGER.style.left = `${left - 4}px`;
    }
}

function moveDodgerRight() {
    const left = positionToInteger(DODGER.style.left);

    if (left < 360) {
        DODGER.style.left = `${left + 4}px`;
    }
}

function positionToInteger(position) {
    return parseInt(position.split('px')[0]) || 0;
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});

