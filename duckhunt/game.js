var timer = 0
function init(){
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img,0,0);
		timer = 0;
	};
	img.src = './duckhunt-background.gif';
	setInterval(drawBird1,500, ctx, timer);
};

function drawBird1(ctx, timer){
	var bird1 = new Image();
	console.log(timer);
	if (timer == 0) {
		bird1.onload = function(){
			ctx.drawImage(bird1,0,118,37,37,50,50,45,45);
			timer = 1;
		};
	} else {
		bird1.onload = function(){
			ctx.drawImage(bird1,38,118,37,37,50,50,45,45);
			timer = 0;
		};

	}
	bird1.src = './duckhunt_various_sheet.png'
	console.log("timer is", timer);
};

// function drawBird2(ctx){
// 	var bird2 = new Image();
// 	bird2.onload = function(){
// 		ctx.drawImage(bird2,124,114,37,37,70,70,45,45);
// 	};

// 	bird2.src = './duckhunt_various_sheet.png'
// };
