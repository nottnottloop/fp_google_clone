//color title text
const title = document.querySelector(".title");
let text = title.innerHTML.split('');
let newText = [];
const colors = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335', '#FBBC05', '#34A853'];
for (let i = 0; i < text.length; i++) {
	newText.push(`<h1 style="color: ${colors[i]};">${text[i]}</style>`);
}
title.innerHTML = newText.join('');

const amongus = document.querySelector("#amongusresults");
const searchButton = document.querySelector("#mainpagesearch");
const luckyButton = document.querySelector("#mainpagelucky");
const searchBox = document.querySelector("#mainpageinput")

//amongus.addEventListener('click', document.location.href = "./index.html");
searchButton.addEventListener('click', search);
luckyButton.addEventListener('click', lucky);

function parseSearch(text) {
		return text.replaceAll(' ', '_');
}

function search(e) {
	e.preventDefault()
  //let str = `http://localhost:3000/${parseSearch(searchBox.value)}`;
	const results = localStorage.setItem("search", `http://localhost:3000/${parseSearch(searchBox.value)}`);
  document.location.href = "./results.html"
}

function lucky(e) {
	e.preventDefault()
  fetch(`http://localhost:3000/${parseSearch(searchBox.value)}`)
    .then(resp => { 
      return resp.json();
    })
		.then(data => document.location.href = data[0].url);
}