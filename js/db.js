//var storage = localStorage;
var storage = sessionStorage;

//ストレージへの保存は、setItemメソッド。
//storage.setItem(key, value);

//データの取得は、getItemメソッド。
//storage.getItem(key);

//storage.removeItem(key);
if(storage.length > 0){
	storage.clear(); //すべてのデータを削除
	var storage = sessionStorage;
}

/*
var cat = {
	name: 'ねこ',
	color: 'white',
	age: 5
};

storage.setItem('cat', JSON.stringify(cat));
//Key=>cat/Value=>{"name":"ねこ","color":"white","age":5} - ①

var getData = JSON.parse(storage.getItem('cat'));
console.log(getData['name']); 
//=>　ねこ - ②
*/

function clickBlock(newClick) {
	fetch("./data/20220212/toho-shinjuku.json")
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
		
		storage.setItem(newClick, JSON.stringify(json[newClick]));
		if(document.getElementById('timeschedule3')){
			document.getElementById('timeschedule3').remove();
		}
		blockOn();
	});
}

function blockOn() {
	document.getElementById('cunt-cinema').innerHTML = storage.length;
	for (let i = 0; i < storage.length; i++) {
		let key = storage.key(i);

		var getData = JSON.parse(storage.getItem(key));
		console.log(getData['between_time']); 

		var day = 			getData['day'];
		var title = 		getData['title'];
		var between_time = 	getData['between_time'];
		var theater_name = 	getData['theater_name'];
		var screen_num = 	getData['screen_num'];
		var option = 		getData['ption'];
		var eirin = 		getData['eirin'];
		var time = 			getData['between_time'].split("～");

		//console.log(key);
		//console.log(storage.getItem(key));
		document.getElementById('eiga-block-'+key).className = 'eiga-block';
		document.getElementById('eiga-block-'+key).setAttribute('onclick', 'clickBlockOff("'+key+'")');

		if(i == 0){
			docGetElementById('left', 'section', 'timeschedule3', 'timeschedule3', "", "", "");
		}

		docGetElementById('timeschedule3', 'button', 'eiga-block2-'+key, 'eiga-block2', "", "", "");

		docGetElementById('eiga-block2-'+key, 'div', 'time2-'+key, 'time', "", "", "");

		docGetElementById('time2-'+key, 'div', "", 'time-sta', time[0], "", "");
		
		docGetElementById('time2-'+key, 'div', "", "", "||", "", "");
		
		docGetElementById('time2-'+key, 'div', "", 'time-end', time[1], "", "");
		
		docGetElementById('eiga-block2-'+key, 'div', 'detail2-'+key, 'detail', "", "", "");
		
		docGetElementById('detail2-'+key, 'div', 'title2-'+key, 'title', title, "", "");
		
		docGetElementById('detail2-'+key, 'div', 'bd1-2-'+key, 'bd1', "", "", "");
		
		docGetElementById('bd1-2-'+key, 'div', 'bd2-2-'+key, 'bd2', "", "", "");
		
		docGetElementById('bd2-2-'+key, 'div', 'options2-'+key, 'options', option+" "+eirin, "", "");
		
		docGetElementById('bd2-2-'+key, 'div', 'theater2-'+key, 'theater', theater_name+" - "+screen_num, "", "");
		
		docGetElementById('bd1-2-'+key, 'div', 'add2-'+key, 'add', "+", "", "");


		document.getElementById('eiga-block2-'+key).style.display = "";
  	}
}

function clickBlockOff(newClick) {
	storage.removeItem(newClick);
	document.getElementById('eiga-block-'+newClick).className = 'eiga-block2';
	document.getElementById('eiga-block-'+newClick).setAttribute('onclick', 'clickBlock("'+newClick+'")');
	if(document.getElementById('timeschedule3')){
		document.getElementById('timeschedule3').remove();
	}
	blockOn();
}




