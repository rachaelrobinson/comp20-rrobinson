function parse(){
	var http = new XMLHttpRequest();
	http.open("GET", "data.json", true);
	// console.log(http);
	http.onreadystatechange = function(){
		if(http.readyState === 4) {
			
			addMessage(http.responseText);
		}
	};	
	http.send();
};

function addMessage(JSONdata) {
	var parsedObj = JSON.parse(JSONdata);
	var messages = document.getElementById('messages');
	for (var i = 0; i < parsedObj.length; i++) {
		messages.innerHTML += "<p>" + parsedObj[i]["content"] + " " + "<span>" + parsedObj[i]["username"] + "</span" + "</p>";
	}
};