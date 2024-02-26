
function clickDate(newBlock) {
	const elem = document.getElementById(newBlock);
	
	if(elem.className == "off"){
		elem.className = "on";		
	}else {
		elem.className = "off";
	}
}

function clickArea(newBlock) {
	const elem = document.getElementById(newBlock);

	if(elem.className == "off"){
		elem.className = "on";		
	}else {
		elem.className = "off";
	}
}

function clickCinema(newBlock) {
	const elem = document.getElementById(newBlock);

	if(elem.className == "off"){
		elem.className = "on";		
	}else {
		elem.className = "off";
	}
}

function clickBlock(newBlock) {
	console.log(newBlock);
}

function inputChange(event){
	console.log(event.currentTarget.value);
}

let selectdate = document.getElementById('select-date');
selectdate.addEventListener('change', inputChange);

let selectarea = document.getElementById('select-area');
selectarea.addEventListener('change', inputChange);
