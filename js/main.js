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
			var time = json[i].between_time.split("～");

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
				//console.log(i);
		
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
			liLast.className = 'eiga-block2';
			liLast.innerHTML = "";
			liLast.setAttribute('onclick', 'clickBlock("eiga-block-'+i+'")');
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('eiga-block-'+i);
			liLast = document.createElement('div');
			liLast.id = 'time-'+i;
			liLast.className = 'time';
			liLast.innerHTML = "";
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('time-'+i);
			liLast = document.createElement('div');
			//liLast.id = 'time-'+i;
			liLast.className = 'time-sta';
			liLast.innerHTML = time[0];
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('time-'+i);
			liLast = document.createElement('div');
			//liLast.id = "";
			//liLast.className = "";
			liLast.innerHTML = "||";
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('time-'+i);
			liLast = document.createElement('div');
			//liLast.id = 'time-'+i;
			liLast.className = 'time-sta';
			liLast.innerHTML = time[1];
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('eiga-block-'+i);
			liLast = document.createElement('div');
			liLast.id = 'detail-'+i;
			liLast.className = 'detail';
			liLast.innerHTML = "";
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('detail-'+i);
			liLast = document.createElement('div');
			liLast.id = 'title-'+i;
			liLast.className = 'title';
			liLast.innerHTML = title;
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('detail-'+i);
			liLast = document.createElement('div');
			liLast.id = 'bd-1-'+i;
			liLast.className = 'bd-1';
			liLast.innerHTML = "";
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('bd-1-'+i);
			liLast = document.createElement('div');
			liLast.id = 'bd-2-'+i;
			liLast.className = 'bd-2';
			liLast.innerHTML = "";
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('bd-2-'+i);
			liLast = document.createElement('div');
			liLast.id = 'options-'+i;
			liLast.className = 'options';
			liLast.innerHTML = option+" "+eirin;
			element.appendChild(liLast);
			element = "";
			liLast = "";						

			element = document.getElementById('bd-2-'+i);
			liLast = document.createElement('div');
			liLast.id = 'theater-'+i;
			liLast.className = 'theater';
			liLast.innerHTML = theater_name+" - "+screen_num;
			element.appendChild(liLast);
			element = "";
			liLast = "";

			element = document.getElementById('bd-1-'+i);
			liLast = document.createElement('div');
			liLast.id = 'add-'+i;
			liLast.className = 'add';
			liLast.innerHTML = "+";
			element.appendChild(liLast);
			element = "";
			liLast = "";

			document.getElementById('eiga-block-'+i).style.display = "";
		}
	});
}
