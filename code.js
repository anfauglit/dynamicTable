function increaseFont(eventObj) {
	var digit = eventObj.target;
	digit.setAttribute("class","focused");
}
function decreaseFont(eventObj) {
	var digit = eventObj.target;
	digit.setAttribute("class","normal");
}
function assignEventHandlers() {
	var tdList = document.getElementsByTagName("td");
	for (var i = 0; i < tdList.length; i++) {
		var rand = Math.round(Math.random()*9);
		if (rand != 0) {
			tdList[i].innerHTML = rand;
		} else {
			tdList[i].innerHTML = "";
		}
		tdList[i].onmouseover = increaseFont;
		tdList[i].onmouseout = decreaseFont;
	}
}
function getRandomize() {
	setInterval(assignEventHandlers, 5000);
}

function getCoords(eventObj) {
	var outPut = document.getElementById("coords");
	var x = eventObj.pageX;
	var y = eventObj.pageY;
	outPut.innerHTML = "Current coordinates: " + x + ", " + y;
}

window.onload = getRandomize;