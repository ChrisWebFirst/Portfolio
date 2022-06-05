

//------------------------------dont want to duplicate this code so I am loading one version to all pages
const load_menu = (e) => {   
    (e || window.event).preventDefault();
    fetch("menu.html")
        .then((response) => response.text())
        .then((html) => {          
            document.getElementById("Menu").innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });    
} 
window.addEventListener('load', load_menu, false);



function MobileMenu(Type) {
    switch (Type) {
        case "Close":
            document.getElementById("MobileMenu").style.visibility = "hidden";
            document.getElementById("MobileMenu").style.width = "0px";
            break;
        case "Open":
            document.getElementById("MobileMenu").style.visibility = "visible";
            document.getElementById("MobileMenu").style.width = "96%";
            break;
        default:
            break;
    }
}