const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 0.5*minutes;
    const minuteDegree = (minutes / 60) * 360;
    const secondDegree = ((seconds / 60) * 360);
    if (secondDegree === 0) {
        console.log('transition stopped');
        hand.style.transition = 'all 0s';
    }
    else {
        hand.style.transition = `all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)`;
    }
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    //console.log(seconds);
}
setInterval(setDate, 1000);