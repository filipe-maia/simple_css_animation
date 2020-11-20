
function animate1() {
	let animation = document.getElementById('animation');
	animation.setAttribute('class', 'morphing_ball');
	let button1 = document.getElementById('animate1');
	button1.style = 'visibility:hidden;';
	let button2 = document.getElementById('animate2');
	button2.style = 'visibility:visible;';
}

function animate2() {
	let animation = document.getElementById('animation');
	animation.setAttribute('class', 'back_morphing_ball');
	let button1 = document.getElementById('animate1');
	button1.style = 'visibility:visible;';
	let button2 = document.getElementById('animate2');
	button2.style = 'visibility:hidden;';
}
