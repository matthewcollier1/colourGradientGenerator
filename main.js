/* Colour Grab Div */

const url = 'http://www.colr.org/json/color/random';

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson);
		let newColor = '#' + myJson.new_color;
		console.log(newColor);
		let colorDiv = document.querySelector('.colour-grab');
		console.log(colorDiv);
		colorDiv.style.backgroundColor = newColor;
	});

/* Test Div */

// Colour One

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

let colour = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

console.log(colour);

// Colour Two

let redTwo = Math.floor(Math.random() * 255);
let greenTwo = Math.floor(Math.random() * 255);
let blueTwo = Math.floor(Math.random() * 255);

let colourTwo = 'rgb(' + redTwo + ', ' + greenTwo + ', ' + blueTwo + ')';

console.log(colourTwo);

// Combine the colours as gradient

let gradient = 'linear-gradient(to right, ' + colour + ', ' + colourTwo + ');';

console.log(gradient);

let test = document.querySelector('.test');

console.log(test);

let setBackground = test.setAttribute('style', 'background-image: ' + gradient);

setBackground;

// button click button

let buttonClick = document.querySelector('.button-click-button');

buttonClick.innerHTML = 'Click Here To Start';

buttonClick.addEventListener('click', () => {
	buttonClick.innerHTML = 'Click To Change';
	let background = document.querySelector('.button-click');
	console.log(background);

	let randomRed = Math.floor(Math.random() * 255);
	let randomGreen = Math.floor(Math.random() * 255);
	let randomBlue = Math.floor(Math.random() * 255);
	let opacity = Math.random().toFixed(2);

	let randomColour =
		'rgba(' +
		randomRed +
		', ' +
		randomGreen +
		', ' +
		randomBlue +
		', ' +
		opacity +
		')';

	let randomRedTwo = Math.floor(Math.random() * 255);
	let randomGreenTwo = Math.floor(Math.random() * 255);
	let randomBlueTwo = Math.floor(Math.random() * 255);
	let opacityTwo = Math.random().toFixed(2);

	let randomColourTwo =
		'rgba(' +
		randomRedTwo +
		', ' +
		randomGreenTwo +
		', ' +
		randomBlueTwo +
		', ' +
		opacityTwo +
		')';

	let img =
		'https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c470f4a484efe70cba11f04a57cba7a&auto=format&fit=crop&w=500&q=60';
	let backgroundGradient =
		'linear-gradient(to right, ' +
		randomColour +
		', ' +
		randomColourTwo +
		')' +
		', ' +
		'url(' +
		img +
		');';

	background.setAttribute('style', 'background-image: ' + backgroundGradient);

	let listHolder = document.querySelector('.new-list');

	let newList = document.createElement('li');
	newList.innerText = `${randomColour} , ${randomColourTwo}`;

	listHolder.appendChild(newList);

	newList.setAttribute(
		'style',
		'background: ' +
			'linear-gradient(to right, ' +
			randomColour +
			', ' +
			randomColourTwo +
			')'
	);
	console.log(listHolder);

	if (listHolder.childElementCount === 11) {
		listHolder.innerHTML = '';
		buttonClick.innerHTML = 'Click To Start';
		background.setAttribute('style', 'background: white');
	}

	if (listHolder.childElementCount === 10) {
		buttonClick.innerHTML = 'Click To Restart';
	}
});
