// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			document.getElementById("j").innerHTML="You pressed alphabet key";
		}
		else{
		numberkey()
		
	}
}

   


function numberkey(){
	if (keyPressed >= 48 && keyPressed <= 57) {
		
		document.getElementById("j").innerHTML= "you pressed a number";
}

 

}
function arrowkey(){
	if (keyPressed >= 37 && keyPressed <= 40) {
		arrowkey() 
		document.getElementById("j").innerHTML= "you pressed a arrow key";	
		}
}



function specialkey()
{
if (keyPressed >= 17 && keyPressed >= 18 && keyPressed >= 19) {
	specialkey()
	document.getElementById("j").innerHTML= "you pressed a special key";
}	
}

	
