const pixel = document.querySelectorAll('.pixel');
const clearBtn = document.querySelector('.clear');
const clearAllBtn = document.querySelector('.clearAll');
const drawBtn = document.querySelector('.draw');
const grid = document.querySelector('.grid');
const randomColor = document.querySelector('.randomColor');
const colorPicker = document.getElementById('colorPicker');
const theme = document.querySelectorAll('.theme');
const body = document.getElementById('body');
const btn = document.querySelectorAll('.btn');
const text = document.querySelectorAll('span');
let flag = 0;
let randomFlag = false;
let color1 = 0,
	color2 = 0,
	color3 = 0;

const themeArray = ['#ffa69e', '#93e1d8', '#323234'];

pixel.forEach(pix => pix.addEventListener('mousemove', draw));
clearBtn.addEventListener('click', () => {
	flag = 1;
});

drawBtn.addEventListener('click', () => {
	flag = 0;
	randomFlag = false;
	color1 = 0;
	color2 = 0;
	color3 = 0;

	console.log(randomFlag);
});

clearAllBtn.addEventListener('click', clearAll);

randomColor.addEventListener('click', e => (randomFlag = true));

theme.forEach(color => color.addEventListener('click', changeTheme));

function clearAll() {
	pixel.forEach(pix => (pix.style.backgroundColor = 'white'));
}

function draw() {
	if (randomFlag === true) {
		this.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
	}
	if (flag === 0 && randomFlag === false) {
		this.style.backgroundColor = colorPicker.value;
	} else if (flag === 1) {
		this.style.backgroundColor = body.style.backgroundColor;
	}
	console.log(color1, color2, color3);
}

function getRandomColor() {
	return Math.floor(Math.random() * 255);
}

function changeTheme() {
	switch (this.id) {
		case 'theme1':
			body.style.backgroundColor = themeArray[0];
			pixel.forEach(pix => (pix.style.border = 'solid 1px white'));
			btn.forEach(btns => (btns.style.backgroundColor = 'white'));
			btn.forEach(btns => (btns.style.color = 'black'));
			break;

		case 'theme2':
			body.style.backgroundColor = themeArray[1];
			pixel.forEach(pix => (pix.style.border = 'solid 1px white'));
			btn.forEach(btns => (btns.style.backgroundColor = 'white'));
			btn.forEach(btns => (btns.style.color = 'black'));
			break;

		case 'theme3':
			body.style.backgroundColor = themeArray[2];
			pixel.forEach(pix => (pix.style.border = 'solid 1px white'));
			btn.forEach(btns => (btns.style.backgroundColor = 'white'));
			btn.forEach(btns => (btns.style.color = 'black'));
			text.forEach(txt => (txt.style.color = 'white'));
			break;
	}
	// if (this.id === 'theme1') {
	// 	body.style.backgroundColor = themeArray[0];
	// 	pixel.forEach(pix => (pix.style.border = 'solid 1px white'));
	// 	btn.forEach(btns => (btns.style.backgroundColor = 'white'));
	// 	btn.forEach(btns => (btns.style.color = 'black'));
	// }

	// if (this.id === 'theme2') {
	// 	body.style.backgroundColor = themeArray[1];
	// 	pixel.forEach(pix => (pix.style.border = 'solid 1px white'));
	// 	btn.forEach(btns => (btns.style.backgroundColor = 'white'));
	// 	btn.forEach(btns => (btns.style.color = 'black'));
	// }

	// if (this.id === 'theme3') {
	// 	body.style.backgroundColor = themeArray[2];
	// 	pixel.forEach(pix => (pix.style.border = 'solid 1px white'));
	// 	btn.forEach(btns => (btns.style.backgroundColor = 'white'));
	// 	btn.forEach(btns => (btns.style.color = 'black'));
	// 	text.forEach(txt => (txt.style.color = 'white'));
	// }
}
