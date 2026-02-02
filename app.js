const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

    rotateClockHand(secondHand, secondDegree);
    rotateClockHand(minuteHand, minuteDegree);
    rotateClockHand(hourHand, hourDegree);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation);
}

setInterval(clockTick, 1000);
clockTick();  // Initialize clock on load
