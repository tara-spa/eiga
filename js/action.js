
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
	if(document.getElementById('timeschedule')){
		domRemove();
	}
	viewList();
	//console.log(event.currentTarget.value);
	//console.log(document.getElementById('select-date').value);
	//console.log(document.getElementById('select-area').value);
	//console.log(document.getElementById('select-cinema').value);
}

let selectdate = document.getElementById('select-date');
selectdate.addEventListener('change', inputChange);

let selectarea = document.getElementById('select-area');
selectarea.addEventListener('change', inputChange);

let selectcinema = document.getElementById('select-cinema');
selectcinema.addEventListener('change', inputChange);


function domRemove(){
	document.getElementById('timeschedule').remove();
}
