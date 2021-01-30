const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');


const moveClock = () => {
    const currentDate = new Date();

    const currentSeconds = currentDate.getSeconds();
    const currentMinute = currentDate.getMinutes();
    const currentHour = currentDate.getHours();

    const secondsFraction = currentSeconds / 60;
    const MinuteFraction = (secondsFraction + currentMinute) / 60;
    const HourFraction = (MinuteFraction + currentHour) / 12;


    second.style.transform = `rotate(${secondsFraction * 360}deg)`;
    minute.style.transform = `rotate(${MinuteFraction * 360}deg)`;
    hour.style.transform = `rotate(${HourFraction * 360}deg)`;
}

setInterval(moveClock, 1000);