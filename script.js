if (screen.width <= 800) {
    document.location = "mobilepage.html";
}

let navItems = document.querySelectorAll(".nav-div");
let navPara = document.querySelectorAll(".nav-para");
let aboutDiv = document.getElementById("about");
let projectsDiv = document.getElementById("projects");
let contactDiv = document.getElementById("contact");
let aboutPara = document.getElementById("about-para");
let projectsPara = document.getElementById("projects-para");
let contactPara = document.getElementById("contact-para");
let contactForm = document.getElementById("contact-form");
let logo = document.getElementById("logo");
let smallDivFontSize = "30px";
let normalDivFontSize = "50px";
let logoSmallSize = "100px";
let logoNormalSize = "300px";
let marginBottom = "30px";
let bgColorOver = "#f8a23a";
let bgColor = "#131b26";


// let mouseOverBgdColor = function() {
//     navItems.style.backgroundColor = "#f8a23a";
//     navPara.style.color = "#131b26";
// }

// let mouseOutBgdColor = function() {
//   navItems.style.backgroundColor = "#131b26";
//   navPara.style.color = "#f8a23a";
// }

// navItems.addEventListener("mouseover", mouseOverBgdColor);

// navItems.addEventListener("mouseout", mouseOutBgdColor);


// navItems.onclick = function() {
//   navItems.style.flexGrow = "6";
//   navPara.style.visibility = "hidden";
// }
let changeColor = (div, para, toActive) => {
    if (toActive) {
        div.style.backgroundColor = bgColorOver;
        para.style.color = bgColor;
    } else {
        div.style.backgroundColor = bgColor;
        para.style.color = bgColorOver;
    }
}

let changeLogo = (logoSmall) => {
    if (logoSmall) {
        logo.style.width = logo.style.height = logoSmallSize;
    } else {
        logo.style.width = logo.style.height = logoNormalSize;
    }
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("mouseover", function() {
        changeColor(navItems[i], navPara[i], true);
    });

    navItems[i].addEventListener("mouseout", function() {
        changeColor(navItems[i], navPara[i], false);
    });
}

aboutDiv.onclick = () => {
    resetDivs();
    aboutDiv.style.flexGrow = "6";
    projectsPara.style.fontSize = smallDivFontSize;
    contactPara.style.fontSize = smallDivFontSize;
    projectsPara.style.writingMode = "vertical-rl";
    contactPara.style.writingMode = "vertical-rl";
    projectsPara.style.marginBottom = marginBottom;
    contactPara.style.marginBottom = marginBottom;
}

projectsDiv.onclick = () => {
    resetDivs();
    projectsDiv.style.flexGrow = "6";
    aboutDiv.style.alignItems = "stretch";
    aboutPara.style.fontSize = smallDivFontSize;
    contactPara.style.fontSize = smallDivFontSize;
    aboutPara.style.writingMode = "vertical-rl";
    contactPara.style.writingMode = "vertical-rl";
    aboutPara.style.marginBottom = marginBottom;
    contactPara.style.marginBottom = marginBottom;
    changeLogo(true);
}

contactDiv.onclick = () => {
    resetDivs();
    contactDiv.style.flexGrow = "6";
    aboutDiv.style.alignItems = "stretch";
    aboutPara.style.fontSize = smallDivFontSize;
    projectsPara.style.fontSize = smallDivFontSize;
    aboutPara.style.writingMode = "vertical-rl";
    projectsPara.style.writingMode = "vertical-rl";
    aboutPara.style.marginBottom = marginBottom;
    projectsPara.style.marginBottom = marginBottom;
    changeLogo(true);
    contactForm.style.visibility = "visible";
}

let resetDivs = () => {
    aboutDiv.style.flexGrow = projectsDiv.style.flexGrow = contactDiv.style.flexGrow = 1;
    changeLogo(false);
    aboutPara.style.fontSize = projectsPara.style.fontSize = contactPara.style.fontSize = normalDivFontSize;
    aboutPara.style.writingMode = projectsPara.style.writingMode = contactPara.style.writingMode = "horizontal-tb";
    aboutPara.style.visibility = projectsPara.style.visibility = contactPara.style.visibility = "visible";
    aboutDiv.style.alignItems = "center";
    contactForm.style.visibility = "collapse";
}