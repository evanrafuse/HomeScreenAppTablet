function main() {
  const searchForm = document.getElementById('searchForm');
  const searchBox = document.getElementById('searchBox');
  searchForm.addEventListener('submit', search);
  urlBase = "https://www.google.com/search?q="
  searchBox.focus()
}

function search(event) {
  event.preventDefault()
  console.log(searchBox.value)
  url = urlBase + searchBox.value
  window.open(url).focus()
}
main();