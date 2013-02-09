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
	$('button').click(function(){
		var canvas = document.getElementById('shenziMeme');
		var image = canvas.toDataURL("image/jpg");
		window.location = image;
	})
})
function printCanvas(shenzi){
    sandbox = document.getElementById('shenziMeme').getContext('2d');
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
	sandbox.font = 'normal 42px "impact"';
	sandbox.fillStyle = "white";
	sandbox.strokeStyle = "black";
	sandbox.lineWidth = 2;
	sandbox.textAlign ='center';
	wrapText(sandbox, shenzi.line1, 250, shenzi.line1Height, 450, 25)
	//sandbox.fillText(shenzi.line1, 250, shenzi.line1Height);
	//sandbox.strokeText(shenzi.line1, 250, shenzi.line1Height);
	//sandbox.fillText(shenzi.line2, 250, shenzi.line2Height);
	//sandbox.strokeText(shenzi.line2, 250, shenzi.line2Height);
}
function build(line1, line2, backGround, img, scale, height1, height2){
	shenzi = new Object();
	shenzi.line1 = line1;
	shenzi.line2 = line2;
	shenzi.line1Height = height1;
	shenzi.line2Height = height2;
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
	var height1 = $('#height1');
	var height2 = $('#height2');

	line1 = $('#line1').val();
	line2 = $('#line2').val();

	if(height1 !== ""){
		height1 = height1.val();
	}else{
		height1 = 50;
	}

	if(height2 !== ""){
		height2 = height2.val();
	}else{
		height2 = 450;
	}

	scale = $('#scale').val();
	backGround = $('.backgroundSelect input:checked').attr('value');
	img = $('.imgSelect input:checked').attr('value');

	build(line1, line2, backGround, img, scale, height1, height2);
}
//misc util
function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var cars = text.split("\n");

        for (var ii = 0; ii < cars.length; ii++) {

            var line = "";
            var words = cars[ii].split(" ");

            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + " ";
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > maxWidth) {
                    context.fillText(line, x, y);
                    line = words[n] + " ";
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }

            context.fillText(line, x, y);
            y += lineHeight;
        }
     }

