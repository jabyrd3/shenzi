$(document).ready(function(){
	$('form').change(function(event){
		submitForm();
	})
	$('form').submit(function(){
		event.preventDefault();
	});
	var currentValue = $('.imgSelect input:last-child');
	$('.imgSelect input:last-child').change(function(){
	    currentValue.html(this.value);
	});
})
function printCanvas(shenzi){
	var sandbox = document.getElementById('shenziMeme').getContext('2d');
	sandbox.width = 500;
	sandbox.height = 500;
	var backGround = new Image();
	var shenzImage = new Image();
	backGround.src = shenzi.backGround;
	shenzImage.src = shenzi.img.url;
	var scaleX = shenzi.img.scale * 5;
	var scaleY = scaleX * shenzImage.height / shenzImage.width

	sandbox.drawImage(backGround, 0, 0);
	sandbox.drawImage(shenzImage, (sandbox.width - scaleX) / 2, (sandbox.height - scaleY)/2, scaleX, scaleY);
	sandbox.font = 'normal 42px Impact';
	sandbox.fillStyle = "white";
	sandbox.strokeStyle = "black";
	sandbox.lineWidth = 2;
	sandbox.fillText(shenzi.line1, 50, 50);
	sandbox.strokeText(shenzi.line1, 50, 50);


}
function build(line1, line2, backGround, img, scale){
	shenzi = new Object();
	shenzi.line1 = line1;
	shenzi.line2 = line2;
	shenzi.backGround = backGround;
	shenzi.img = {}
	shenzi.img.url = img;
	shenzi.img.scale = scale;
	printCanvas(shenzi);
}
function submitForm(){
	var backGround = 'img/shenzDefault.jpg';
	var img = 'img/shenzi1.jpg';
	var line1 = 'default string';
	var line2 = 'default string 2';
	var scale = 100;
	line1 = $('.text input:first-child:input').val();
	line2 = $('.text input:last-child:input').val();
	scale = $('.imgSelect input:last-child').val();
	//backGround = $('.backgroundSelect input:checked').attr('value');
	img = $('.imgSelect input:checked').attr('value');
	build(line1, line2, backGround, img, scale);
}
//test