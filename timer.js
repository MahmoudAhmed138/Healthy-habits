var btn= document.getElementById("btn");
window.onload = function(){
    var btn= document.getElementById("btn");
}
function startTimer() {
    btn.style.display="none";
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;

    let minutes = parseInt(minutesInput);
    let seconds = parseInt(secondsInput);

    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;

    if (minutes < 0 || seconds < 0 || seconds >= 60) {
        alert('Please enter valid values');
        return;
    }

    const totalTime = (minutes * 60) + seconds;
    let timeLeft = totalTime;

    const countdownDisplay = document.getElementById('countdown');

    function updateDisplay() {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        countdownDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    updateDisplay();

    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = '00:00';
            alert('Time is up!');
            btn.style.display = "block";
            return;
        }
        timeLeft--;
        updateDisplay();
    }, 1000);
}