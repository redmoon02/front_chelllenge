
let countdown;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let Countdowntimer = document.getElementById('countdown');
let timeInput = document.getElementById('timeInput');

function startCount() {
    let totalSeconds = parseInt(hoursInput.value) * 3600 +
    parseInt(minutesInput.value) * 60 +
    parseInt(secondsInput.value);
        if (totalSeconds > 0) {
        timeInput.classList.add('hidden');

        countdown = setInterval(function () {
            if (totalSeconds <= 0) {
                clearInterval(countdown);
                alert('타이머 종료');
                    timeInput.classList.remove('hidden');
                    resetTimer(); 
                    } 
            else {
                let hours = Math.floor(totalSeconds / 3600);
                let minutes = Math.floor((totalSeconds % 3600) / 60);
                let seconds = totalSeconds % 60;

            Countdowntimer.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
            totalSeconds--;
            }
        }, 1000);
    }
}

function stopCount() {
    clearInterval(countdown);
    timeInput.classList.remove('hidden')
}

function resetCount() {
    clearInterval(countdown);
    timerDisplay.textContent = '00:00:00';
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
    timeInput.classList.remove('hidden');
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
