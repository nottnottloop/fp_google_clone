const resultsContents = document.querySelector("#resultscontents");
const results = JSON.parse(window.sessionStorage.getItem("results"));

for (let i = 0; i < results.length; i++) {
resultsContents.insertAdjacentHTML("beforeend", `
<section class="resultsbox">
	<h1><a href="${results[i]['url']}">${results[i]['title']}</a></h1>
	<h2>${results[i]['desc']}</h2>
</section>
`);
}