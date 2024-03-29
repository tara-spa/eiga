
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

function clickTab(newBlock) {
	if(newBlock == 'left'){
		document.getElementById('tab-left').className = 'tab-on'
		document.getElementById('tab-right').className = 'tab-off'
		document.getElementById('timeschedule').style.display = "";
		document.getElementById('left').style.display = "none";
	}else{
		document.getElementById('tab-left').className = 'tab-off'
		document.getElementById('tab-right').className = 'tab-on'		
		document.getElementById('timeschedule').style.display = "none";
		document.getElementById('left').style.display = "inline";
	}
}
