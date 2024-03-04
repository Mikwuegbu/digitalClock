let paused = false;
let interVal;

//updating the time

const timeUpdate = () => {
	if (!paused) {
		const now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();

		// Ensure hours, minutes, and seconds are displayed in two digits
		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		const timeString = hours + ':' + minutes + ':' + seconds;
		document.getElementById('timer').innerText = timeString;

		if (hours >= 17 && hours <= 20) {
			document.body.style.backgroundColor = '#808080';
		} else {
			document.body.style.backgroundColor = '#fff';
		}
	}
};

const stopBtnFn = () => {
	paused = true;
	clearInterval();
};

const startBtnFn = () => {
	paused = false;
};

setInterval(timeUpdate, 1000);
document.getElementById('stopBtn').addEventListener('click', stopBtnFn);
document.getElementById('startBtn').addEventListener('click', startBtnFn);
