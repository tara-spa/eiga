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
			var day = json[i].day;
			var title = json[i].title;
			var between_time = json[i].between_time;
			var theater_name = json[i].theater_name;
			var screen_num = json[i].screen_num;
			var option = json[i].option;
			var eirin = json[i].eirin;			
			var time = json[i].between_time.split("～");

			if(i == 0 || screen_num != json[i-1]["screen_num"]){
				docGetElementById('timeschedule', 'div', 'screen_num-'+screen_num, 'timeschedule2', "", "", "");
					
				docGetElementById('screen_num-'+screen_num, 'h2', "", "", "スクリーン"+json[i]["screen_num"], "", "");
			}

			docGetElementById('screen_num-'+screen_num, 'button', 'eiga-block-'+i, 'eiga-block2', "", 'onclick', 'clickBlock("eiga-block-'+i+'")');

			docGetElementById('eiga-block-'+i, 'div', 'time-'+i, 'time', "", "", "");
			
			docGetElementById('time-'+i, 'div', "", 'time-sta', time[0], "", "");
			
			docGetElementById('time-'+i, 'div', "", "", "||", "", "");
			
			docGetElementById('time-'+i, 'div', "", 'time-end', time[1], "", "");
			
			docGetElementById('eiga-block-'+i, 'div', 'detail-'+i, 'detail', "", "", "");
			
			docGetElementById('detail-'+i, 'div', 'title-'+i, 'title', title, "", "");
			
			docGetElementById('detail-'+i, 'div', 'bd1-'+i, 'bd1', "", "", "");
			
			docGetElementById('bd1-'+i, 'div', 'bd2-'+i, 'bd2', "", "", "");
			
			docGetElementById('bd2-'+i, 'div', 'options-'+i, 'options', option+" "+eirin, "", "");
			
			docGetElementById('bd2-'+i, 'div', 'theater-'+i, 'theater', theater_name+" - "+screen_num, "", "");
			
			docGetElementById('bd1-'+i, 'div', 'add-'+i, 'add', "+", "", "");

			document.getElementById('eiga-block-'+i).style.display = "";
		}
	});
}

function docGetElementById(ElementById, Element, Id, ClassName, InnerHTML, Attribute_A,Attribute_B){
	element = document.getElementById(ElementById);
	liLast = document.createElement(Element);
	if(Id){
		liLast.id = Id;
	}
	if(ClassName){
		liLast.className = ClassName;
	}
	if(InnerHTML){
		liLast.innerHTML = InnerHTML;
	}
	if(Attribute_A){
		liLast.setAttribute(Attribute_A, Attribute_B);
	}
	element.appendChild(liLast);
	element = "";
	liLast = "";
}




