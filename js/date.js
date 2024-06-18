const date = document.querySelector("#date");

function showRestTime() {
	const now = new Date();
	const goal = new Date(2024, 7, 25);

	const restMillisecond = goal.getTime() - now.getTime();
	const day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);

	document.getElementById("date").textContent = day;
}

setInterval(showRestTime, 1000);
