
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsleft = Math.round((then - Date.now()) / 1000);

        if (secondsleft < 0) {
            clearInterval(countdown);
        }
        displayTimeLeft(secondsleft);
        displayEndTime(then);

    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}


function displayEndTime(TimeStamp) {
    const end = new Date(TimeStamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    const seconds = end.getSeconds();
    endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function StartTimer() {
    const time = this.dataset.time;
    timer(parseInt(time));
}
buttons.forEach(x => x.addEventListener('click', StartTimer));

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const mins = this.minutes.value;
    this.reset();
    timer(mins * 60);
});