function redirect() {
    window.location.href = "./Misc/Login/login.html";
}

// REsults
const form = document.getElementById('search-form');
const searchInput = form.querySelector('input');
const searchResults = document.querySelector('.search-results');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    return;
  }
  const url = `https://www.google.com/search?q=${searchTerm}`;
  window.open(url, '_blank');
  searchResults.innerHTML = `<p><a href="${url}" target="_blank">${searchTerm}</a></p>`;
  searchInput.value = '';
});

