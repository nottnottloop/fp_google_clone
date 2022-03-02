//color title text
const title = document.querySelector(".title");
let text = title.innerHTML.split('');
let newText = [];
const colors = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335', '#FBBC05', '#34A853'];
for (let i = 0; i < text.length; i++) {
	newText.push(`<h1 style="color: ${colors[i]};">${text[i]}</style>`);
}
title.innerHTML = newText.join('');

const searchButton = document.querySelector("#mainpagesearch");
const luckyButton = document.querySelector("#mainpagelucky");
const searchBox = document.querySelector("#mainpageinput")

searchButton.addEventListener('click', search);
luckyButton.addEventListener('click', lucky);

function search() {
	console.log(searchBox.value);
}

function lucky() {
	console.log('asrtarts')
}