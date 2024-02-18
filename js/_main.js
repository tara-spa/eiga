viewList();

function viewList(newTitle) {
	var timea = "20220212"
	fetch("./data/"+timea+"/toho-shinjuku.json")
	.then(response => {
		//console.log(response);
		if(response.ok){
			   return response.json();
		}else {
			document.getElementById('timeschedule2').textContent = "エラー";
		}
	})
	.then(function (json) {
		//const now = new Date();
		var now = new Date(document.getElementById('cal').value);

		if(!now.getTime()){
			var now = new Date('2022/02/12 09:00');
			//document.getElementById('timeschedule2').textContent = "エラー";
			//document.getElementById('b0').checked = "";
			//console.log('b');
		}

		for (var i = 0; i < json.length; i++) {
			var st = new Date( json[i].start_datetime );

			if(now <= st){
			//if(json[i].screen_num == "SCREEN1"){
			//if(json[i].screen_num == newScreen){ //スクリーンを変数で変える
			//if(json[i].title == "スパイダーマン ノー・ウェイ・ホーム"){
				//console.log(json[i]);
				var day = json[i].day;
				var title = json[i].title;
				var between_time = json[i].between_time;
				var theater_name = json[i].theater_name;
				var screen_num = json[i].screen_num;
				var option = json[i].option;
				var eirin = json[i].eirin;

				let element = document.getElementById('timeschedule2');
				let liLast = document.createElement('button');
				liLast.id = 'eiga-block-'+i;
				liLast.className = 'eiga-block';
				liLast.innerHTML = "";
				liLast.setAttribute('onclick', 'clickBlock("eiga-block-'+i+'")');
				element.appendChild(liLast);
				element = "";
				liLast = "";

				element = document.getElementById('eiga-block-'+i);
				liLast = document.createElement('div');
				liLast.id = 'aaaa-'+i;
				liLast.className = 'aaaa';
				liLast.innerHTML = "";
				element.appendChild(liLast);
				element = "";
				liLast = "";

				element = document.getElementById('aaaa-'+i);
				liLast = document.createElement('div');
				liLast.id = 'eiga-time-'+i;
				liLast.className = 'eiga-time';
				liLast.innerHTML = between_time;
				element.appendChild(liLast);
				element = "";
				liLast = "";

				element = document.getElementById('aaaa-'+i);
				liLast = document.createElement('div');
				liLast.id = 'eiga-name-'+i;
				liLast.className = 'eiga-name';
				liLast.innerHTML = title;
				element.appendChild(liLast);
				element = "";
				liLast = "";

				element = document.getElementById('aaaa-'+i);
				liLast = document.createElement('div');
				liLast.id = 'eiga-eirin-'+i;
				liLast.className = 'eiga-eirin';
				liLast.innerHTML = "";
				element.appendChild(liLast);
				element = "";
				liLast = "";

				if(eirin != ""){
					element = document.getElementById('eiga-eirin-'+i);
					liLast = document.createElement('span');
					liLast.id = 'eiga-eirin2-'+i;
					liLast.className = 'options2';
					liLast.innerHTML = eirin;
					element.appendChild(liLast);
					element = "";
					liLast = "";						
				}



				element = document.getElementById('eiga-block-'+i);
				liLast = document.createElement('div');
				liLast.id = 'bbbb-'+i;
				liLast.className = 'bbbb';
				liLast.innerHTML = "";
				element.appendChild(liLast);
				element = "";
				liLast = "";

				element = document.getElementById('bbbb-'+i);
				liLast = document.createElement('div');
				liLast.id = 'eiga-option-'+i;
				liLast.className = 'eiga-option';
				liLast.innerHTML = "";
				element.appendChild(liLast);
				element = "";
				liLast = "";
	
				if(option != ""){
					element = document.getElementById('eiga-option-'+i);
					liLast = document.createElement('span');
					liLast.id = 'eiga-options-'+i;
					liLast.className = 'options';
					liLast.innerHTML = option;
					element.appendChild(liLast);
					element = "";
					liLast = "";						
				}

				element = document.getElementById('bbbb-'+i);
				liLast = document.createElement('div');
				liLast.id = 'eiga-theater-'+i;
				liLast.className = 'eiga-theater';
				liLast.innerHTML = theater_name+" - "+screen_num;
				element.appendChild(liLast);
				element = "";
				liLast = "";


				document.getElementById('eiga-block-'+i).style.display = "";

				/*
				if(json[i].title == newTitle){
					document.getElementById('eiga-block-'+i).style.display = "";
				}else{
					document.getElementById('eiga-block-'+i).style.display = "none";
				}
				*/
			}
		
		}
	});
}

	function clickBlock(newBlock) {
		var now = new Date(document.getElementById('cal').value);

		if(!now.getTime()){
			var now = new Date('2022/02/12 09:00');
		}
		const elem = document.getElementById(newBlock);
		var blockName = newBlock.replace('eiga-block-','');
		
		if (document.getElementById(newBlock).className == "eiga-block") {
			elem.className = "eiga-block2";
			var flag = 1;
		}else {
			elem.className = "eiga-block";
			var flag = 0;
		}

		var timea = "20220212";
		fetch("./data/"+timea+"/toho-shinjuku.json")
		.then(response => {
			   return response.json();
		})
		.then(function (json) {

			for (var i=0; i<json.length; i++) {
				var st = new Date( json[i].start_datetime);
				if(now <= st){
					if(i != blockName){
						//console.log(json[blockName].start_datetime);
						//console.log(json[blockName].end_datetime);
						//console.log(json[i].start_datetime);
						//console.log(json[i].end_datetime);
	
						if(json[i].end_datetime >= json[blockName].start_datetime && json[i].start_datetime <= json[blockName].end_datetime){
							//console.log(i);
							//console.log(document.getElementById('eiga-block-'+i));
							if(flag == 1){
								document.getElementById('eiga-block-'+i).className = "eiga-block3"
							}else{
								document.getElementById('eiga-block-'+i).className = "eiga-block"
							}
						}
					}
				}
			}

			// for (var j=0; j<json.length; j++) {
			// 	if(json[j].screen_num == newScreen){
			// 		if(newFlag == "on"){
			// 				document.getElementById('eiga-block-'+j).style.display = "";
			// 		}else {
			// 				document.getElementById('eiga-block-'+j).style.display = "none";
			// 		}
			// 	}
			// }
		});		

	}

	function clickScreen(newScreen) {
		const elem = document.getElementById(newScreen);
		var screenName = newScreen.replace('-','').toUpperCase();
		if (elem.className == "screen-off") {
			elem.className = "screen-on";
			//var flag = 1;
			blockDisplay(screenName, 'on');
		}else {
			elem.className = "screen-off";
			//var flag = 0;
			blockDisplay(screenName, 'off');
		}
	}

	function blockDisplay(newScreen, newFlag) {
		var timea = "20220212";
		fetch("./data/"+timea+"/toho-shinjuku.json")
		.then(response => {
			   return response.json();
		})
		.then(function (json) {
			for (var j=0; j<json.length; j++) {
				if(json[j].screen_num == newScreen){
					if(newFlag == "on"){
							document.getElementById('eiga-block-'+j).style.display = "";
					}else {
							document.getElementById('eiga-block-'+j).style.display = "none";
					}
				}
			}
		});		
	}

	function clickTitle(newTitle) {
		const elem = document.getElementById(newTitle);
		if (elem.className == "title-off") {
			elem.className = "title-on";
			//var flag = 1;
			blockDisplay2(newTitle, 'on');
		}else {
			elem.className = "title-off";
			//var flag = 0;
			blockDisplay2(newTitle, 'off');
		}
	}	

	function blockDisplay2(newTitle, newFlag) {
		var timea = "20220212";
		const now = new Date(document.getElementById('cal').value);
		//console.log(now);

		fetch("./data/"+timea+"/toho-shinjuku.json")
		.then(response => {
			//console.log(response.ok);
			if(response.ok){
				   return response.json();
			}else {
				document.getElementById('timeschedule2').textContent = "エラー";
			}
		})
		.then(function (json) {
			for (var j=0; j<json.length; j++) {
				var st = new Date( json[j].start_datetime );
				if(now <= st){
					if(newTitle == "すべて"){
						if(newFlag == "on"){
							document.getElementById('eiga-block-'+j).style.display = "";
						}else {
							document.getElementById('eiga-block-'+j).style.display = "none";
						}
					}else if(json[j].title == newTitle){
						if(newFlag == "on"){
							document.getElementById('eiga-block-'+j).style.display = "";
							document.getElementById('すべて').className = "title-off"
						}else {
							document.getElementById('eiga-block-'+j).style.display = "none";
						}
					}
				}
			}
		})
		.catch((error) => {
			console.error('Error:', error);
		});		
	}

	window.addEventListener('load', () => {
		//const now = new Date();
		  const now = new Date('2022/02/12 09:00');
		  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
		  document.getElementById('cal').value = now.toISOString().slice(0, -8);
		document.getElementById('cal').min   = now.toISOString().slice(0, -8);
	})
