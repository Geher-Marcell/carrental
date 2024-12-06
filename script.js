var themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    switchTheme();
})



function switchTheme() {
    // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
    if(themeBtn.dataset.theme.toLowerCase() == "dark"){
        document.documentElement.style.setProperty('--bg-color', '#202022');
        document.documentElement.style.setProperty('--fg-color', '#eeeeee');
        themeBtn.dataset.theme = "Light";
    }else{
        document.documentElement.style.setProperty('--bg-color', '#d4d4d4');
        document.documentElement.style.setProperty('--fg-color', '#060606');
        themeBtn.dataset.theme = "Dark";
    }
}