// your code here
function updateUrl(){
	const name = document.getElementById('name').value;
	const year = document.getElementById('year').value;

	const newURL = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year) } `

	document.getElementById('url').textContent = newURL;
}