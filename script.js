// Not opti - is dark mode or not should be the logic to change the state
// let toggleButton = document.getElementById("toggle-btn")
// let heading = document.getElementById("heading")

// function switchTheme() {
//     console.log("Clicked via event listener!");
//     toggleButton.classList.toggle("dark-mode")
//     toggleButton.textContent = "Dark Mode"
//     heading.classList.toggle("dark-mode-heading")
//     document.body.classList.toggle("dark-mode-body")
// }

let toggleButton = document.getElementById("toggle-btn");

function switchTheme() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        toggleButton.textContent = "Light Mode"
    } else {
        toggleButton.textContent = "Dark Mode"
    }
}