//H1 style change when mouse hovers over it
var title = document.querySelector("h1");
title.addEventListener("mouseover", function () {
  title.innerText = "Let's Party!";
  title.style.color = "maroon";
});

//If Statements for light and dark mode
var darkModeButton = document.querySelector(".dark-mode");
var theme = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});
