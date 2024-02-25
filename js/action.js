
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

