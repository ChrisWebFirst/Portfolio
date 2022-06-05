const load_footer = (e) => {
    (e || window.event).preventDefault();
    fetch("footer.html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementsByTagName("footer")[0].innerHTML = html;
            let year = document.getElementById("currentYear");
            year.innerHTML = new Date().getFullYear();
        })
        .catch((error) => {
            console.warn(error);
        });
}
window.addEventListener('load', load_footer, false);


