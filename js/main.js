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

		for (var i = 0; i < json.length; i++) {
			// 昇順
			json.sort(function(a, b) {
				return a["screen_num"] - b["screen_num"];
			});
		}

		for (var i = 0; i < json.length; i++) {
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

			
			if(i == 0 || screen_num != json[i-1]["screen_num"]){
				let element = document.getElementById('timeschedule');
				let liLast = document.createElement('div');
				liLast.id = 'screen_num-'+screen_num;
				liLast.className = 'timeschedule2';
				liLast.innerHTML = "";
				//liLast.setAttribute('onclick', 'clickBlock("eiga-block-'+i+'")');
				element.appendChild(liLast);
				element = "";
				liLast = "";
				console.log(i);
		
				element = document.getElementById('screen_num-'+screen_num);
				liLast = document.createElement('h2');
				liLast.innerHTML = "スクリーン"+json[i]["screen_num"];
				element.appendChild(liLast);
				element = "";
				liLast = "";
			}

			element = document.getElementById('screen_num-'+screen_num);
			liLast = document.createElement('button');
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

			if(option != "" || eirin != ""){
				element = document.getElementById('eiga-option-'+i);
				liLast = document.createElement('span');
				liLast.id = 'eiga-options-'+i;
				liLast.className = 'options';
				if(option != "" && eirin != ""){
					liLast.innerHTML = option+" "+eirin;
				}else if(option != ""){
					liLast.innerHTML = eirin;						
				}
				element.appendChild(liLast);
				element = "";
				liLast = "";						
			}

			element = document.getElementById('bbbb-'+i);
			liLast = document.createElement('div');
			liLast.id = 'eiga-theater-'+i;
			liLast.className = 'eiga-theater';
			liLast.innerHTML = theater_name+" - スクリーン"+screen_num;
			element.appendChild(liLast);
			element = "";
			liLast = "";

			document.getElementById('eiga-block-'+i).style.display = "";
		}
	});
}
