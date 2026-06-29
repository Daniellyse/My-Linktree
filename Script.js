/*Light/Darkmode toggle*/

let darkmode = localStorage.getItem('darkmode'); /*Retreives value of key if it exists*/
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = ()=>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
}
const disableDarkmode = ()=>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}
if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode');
    darkmode!=="active"? enableDarkmode():disableDarkmode();
});
