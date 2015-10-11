function init(){
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img,0,0);
	};
	img.src = './duckhunt-background.gif';
	drawBird1(ctx);
	drawBird2(ctx);
};

function drawBird1(ctx){
	var bird1 = new Image();
	bird1.onload = function(){
		ctx.drawImage(bird1,0,118,37,37,50,50,45,45);
	};
	bird1.src = './duckhunt_various_sheet.png'

};

function drawBird2(ctx){
	var bird2 = new Image();
	bird2.onload = function(){
		ctx.drawImage(bird2,124,114,37,37,70,70,45,45);
	};

	bird2.src = './duckhunt_various_sheet.png'
};