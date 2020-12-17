const input = document.getElementById("input");
const modeText = document.getElementById("mode-text");
const sunIcon = document.querySelector(".fa-sun");



const darkMode = () => {

    // Changing text and icon
    modeText.textContent = "Dark Mode";
    sunIcon.classList.replace("fa-sun" , "fa-moon");

    // setting the attribute that contains all the dark styling to the highest document element
    document.documentElement.setAttribute("data-theme" , "dark");

};

const lightMode = () => {

    // Changing text and icon
    modeText.textContent = "Light Mode";
    sunIcon.classList.replace("fa-moon" , "fa-sun");

    // setting the attribute that contains all the dark styling to the highest document element
    document.documentElement.setAttribute("data-theme" , "light");

};

input.addEventListener("click", (event) => {
    if(event.target.checked === true)
        {
            darkMode();
            localStorage.setItem("theme" , "dark");
        }
    else if(event.target.checked === false)
        {
            lightMode();
            localStorage.setItem("theme" , "light");
        }
});


// Using LocalStorage to store user's theme even after reloading
const currentTheme = localStorage.getItem("theme");

if(currentTheme) {
    // sets the theme to currentTheme
    // when on dark mode , sets attribute of dark theme to the main doc element
    document.documentElement.setAttribute("data-theme" , currentTheme);

    // But the input is not checked as when reloads it is not checked also the darkMode() is not enabled which will left all code inside darkMode.
    if(currentTheme==="dark")
        {
            input.checked = true;
            darkMode();
        }
}