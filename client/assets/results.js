const resultsContents = document.querySelector("#resultscontents");

let str = localStorage.getItem('search');
console.log(str)
fetch(str)
	.then(resp => resp.json())
	.then(data => show(data));

function show(results) {
	for (let i = 0; i < results.length; i++) {
		resultsContents.insertAdjacentHTML("beforeend", `
		<section class="resultsbox">
			<h1><a href="${results[i]['url']}">${results[i]['title']}</a></h1>
			<h2>${results[i]['desc']}</h2>
		</section>`);
	}
}