//updating the time

const timeUpdate = () => {
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
};

// Update the clock every second
setInterval(timeUpdate, 1000);

// Initial call to display the clock immediately
updateClock();
