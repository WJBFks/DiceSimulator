let times = 0

function start() {
	times = 10
	setTimeout("run()", 0)
}

function run() {
	if (times > 0) {
		let num = randomNum(1, 6)
		$("#image").attr("src", "./img/" + num + ".png")
		times--;
		setTimeout("run()", 100)
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1, 10);
			break;
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
			break;
		default:
			return 0;
			break;
	}
}
