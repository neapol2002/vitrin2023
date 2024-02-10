// we need to save the total rotation angle as a global variable 
var current_rotation = 0;

// change CSS transform property on click
let rotatePlus = document.querySelectorAll("#rotate-button_plus");

for (let i = 0; i < rotatePlus.length; i = i +1) {
	
	rotatePlus[i].onclick = rotate;
}

 function rotate() {
	// update total rotation
	// if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
	current_rotation += 90;

	// rotate clockwise by 90 degrees
	document.querySelector("#sample").style.transform = 'rotate(' + current_rotation + 'deg)';
};

document.querySelector("#rotate-button_minus").addEventListener('click', function() {
	// update total rotation
	// if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
	current_rotation -= 90;

	// rotate clockwise by 90 degrees
	document.querySelector("#sample").style.transform = 'rotate(' + current_rotation + 'deg)';
});
