function LoadHeader() {
    $("#Header").load("header.html");
}
function LoadHead() {
    $("#Head").load("head.html");
}
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