function increaseFont(eventObj) {
	var digit = eventObj.target;
	digit.setAttribute("class","focused");
	var noteNode = document.getElementById("note");
	noteNode.style.left = eventObj.pageX + "px";
	noteNode.style.top = eventObj.pageY + "px";
	noteNode.innerHTML = "This is number " + digit.innerHTML;
}

function decreaseFont(eventObj) {
	var digit = eventObj.target;
	digit.setAttribute("class","normal");
	var noteNode = document.getElementById("note");
	noteNode.innerHTML = "";
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

function mouseOverHandlers(element) {
		element.onmouseover = increaseFont;
		element.onmouseout = decreaseFont;	
}

function processInput (entry) {
	//Validate user input
	if (!entry || isNaN(entry)) {
		alert("Not a number");
		return false;
	}
	if (entry > 999999999999999) {
		alert("The number is too large");
		return false;
	}
	return true;
}

function createRow(length) {
	// Returns a table row object with %length% number of cells
	var newRow = document.createElement("tr");
	for (var i = 0; i < length; i++) {
		var newCell = document.createElement("td");
		newRow.appendChild(newCell);
	}
	return newRow;
}

function getRandomize() {
	setInterval(assignEventHandlers, 5000);
}

function buttonPress() {
	var button = document.getElementById("buttonAdd");
	button.onclick = addEntry;
	var input = document.getElementById("inputNumber");
	input.onkeypress = handleKeyPress;
	var buttonErase = document.getElementById("buttonErase");
	buttonErase.onclick = deleteData;
}

function handleKeyPress(eventObj) {
	var button = document.getElementById("buttonAdd");
	var key = eventObj.keyCode;
	if (key == 13) {
		button.click();
		return false;
	}
}

function addEntry() {
	var input = document.getElementById("inputNumber");
	var entry = input.value;
	if (processInput(entry)) {
		var rowToAdd = createRow(data.rankNumber);
		var cellsList = rowToAdd.getElementsByTagName("td");
		var diff = data.rankNumber - entry.length;
		for (var i = 0; i < entry.length; i++) {
			if (entry.charAt(i)!= 0) {
				cellsList[i + diff].innerHTML = entry.charAt(i);
				mouseOverHandlers(cellsList[i + diff]);
			} else {
					cellsList[i + diff].innerHTML = "";
			}	
		}
		var table = document.getElementById("tableBody");
		table.appendChild(rowToAdd);
	}
}

function deleteData() {
	//Erase all data from the table
	var table = document.getElementById("tableBody");
	var rowList = table.getElementsByTagName("tr");
	for (var i = rowList.length - 1; i >= 3; i--) {
		table.removeChild(rowList[i]);
	}
}

var data = {
	rankNumber: 15
};

window.onload = buttonPress;