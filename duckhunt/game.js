function init(){
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.onload = function(e){
		ctx.drawImage(img, 0,0);
	};
	img.src = './duckhunt-background.gif';
};