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

// Context menu

function showCustomMenu(x, y) {
  var menu = document.getElementById("custom-menu");
  menu.style.display = "block";
  menu.style.left = x + "px";
  menu.style.top = y + "px";
}

function hideCustomMenu() {
  var menu = document.getElementById("custom-menu");
  menu.style.display = "none";
}

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  showCustomMenu(e.clientX, e.clientY);
});

document.addEventListener("click", function() {
  hideCustomMenu();
});


var option1 = document.querySelector("#custom-menu li:nth-child(1)");
option1.addEventListener("click", function() {
  // Action for option 1
});

var option2 = document.querySelector("#custom-menu li:nth-child(2)");
option2.addEventListener("click", function() {
  // Action for option 2
});

var option3 = document.querySelector("#custom-menu li:nth-child(3)");
option3.addEventListener("click", function() {
  // Action for option 3
});


