new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "left",
    animateTime: 0.7,
    animateFunction: "ease",
});

let logo = document.getElementById('logo');
let aboutPara = document.getElementById('about-para');

logo.onclick = function() {
    let splitedFullFileName = this.src.split('/');
    let fileName = splitedFullFileName[splitedFullFileName.length - 1];
    if (fileName === "logo.png") {
        logo.src = "res/logo_orange.png";
        aboutPara.style.display = "inline";
    } else {
        logo.src = "res/logo.png";
        aboutPara.style.display = "none";
    }
}

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
})

const sendMail = (mail) => {
    fetch("https://http://uniumuniu.com/mobilepage.html#2/send", {
        method: "post",
        body: mail,
    }).then((response) => {
        return response.json();
    });
};