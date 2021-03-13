let times = 0
let maxPoint = 6
let refreshRate = 10
let refreshNumber = 10

function change() {
	maxPoint = $("#MaxPointInput")[0].value
	$("#MaxPointLabel").html(maxPoint)
	refreshRate = $("#RefreshRateInput")[0].value
	$("#RefreshRateLabel").html(refreshRate)
	refreshNumber = $("#RefreshNumberInput")[0].value
	$("#RefreshNumberLabel").html(refreshNumber)
}


function start() {
	times = refreshNumber
	setTimeout("run()", 0)
}

function run() {
	if (times > 0) {
		let num = randomNum(1, maxPoint)
		$("#image").attr("src", "./img/" + num + ".png")
		times--;
		setTimeout("run()", 1000 / refreshRate)
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
