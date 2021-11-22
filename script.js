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
let submitBtn = document.getElementById("submit-btn");
let smallDivFontSize = "30px";
let normalDivFontSize = "50px";
let logoSmallSize = "100px";
let logoNormalSize = "300px";
let marginBottom = "30px";
let bgColorOver = "#f8a23a";
let bgColor = "#131b26";
let writingMode = "vertical-rl";


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
        submitBtn.style.backgroundColor = bgColor;
        submitBtn.style.color = bgColorOver;
    } else {
        div.style.backgroundColor = bgColor;
        para.style.color = bgColorOver;
        submitBtn.style.backgroundColor = bgColorOver;
        submitBtn.style.color = bgColor;

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

let addActiveClass = (div) => {
    div.classList.add("active");
}

let removeActiveClass = (div) => {
    div.classList.remove("active");
}

let activeFormatting = (div, nonActiveDiv1, nonActiveDiv2) => {
    if (div.classList.contains("active") && div === aboutDiv || div === projectsDiv) {
        div.style.flexGrow = "6";
        div.style.cursor = "default";
        nonActiveDiv1.style.alignItems = "stretch";
        nonActiveDiv1.style.fontSize = nonActiveDiv2.style.fontSize = smallDivFontSize;
        nonActiveDiv1.style.writingMode = nonActiveDiv2.style.writingMode = writingMode;
        nonActiveDiv1.style.marginBottom = nonActiveDiv2.style.marginBottom = marginBottom;
    } else if (div.classList.contains("active") && div === contactDiv) {
        div.style.flexGrow = "6";
        div.style.cursor = "default";
        nonActiveDiv1.style.alignItems = "stretch";
        nonActiveDiv1.style.fontSize = nonActiveDiv2.style.fontSize = smallDivFontSize;
        nonActiveDiv1.style.writingMode = nonActiveDiv2.style.writingMode = writingMode;
        nonActiveDiv1.style.marginBottom = nonActiveDiv2.style.marginBottom = marginBottom;
        contactForm.style.display = "inline";
    } else {
        
    }
}
// TODO: jesli zakladka kliknieta to cursor zmienic na normalny

aboutDiv.onclick = () => {
    resetDivs();
    addActiveClass(aboutDiv);
    activeFormatting(aboutDiv, projectsDiv, contactDiv);
}

projectsDiv.onclick = () => {
    resetDivs();
    addActiveClass(projectsDiv);
    activeFormatting(projectsDiv, aboutDiv, contactDiv);
    changeLogo(true);
}

contactDiv.onclick = () => {
    resetDivs();
    addActiveClass(contactDiv);
    activeFormatting(contactDiv, aboutDiv, projectsDiv);
    changeLogo(true);
}

let resetDivs = () => {
    aboutDiv.style.flexGrow = projectsDiv.style.flexGrow = contactDiv.style.flexGrow = 1;
    changeLogo(false);
    aboutPara.style.fontSize = projectsPara.style.fontSize = contactPara.style.fontSize = normalDivFontSize;
    aboutPara.style.writingMode = projectsPara.style.writingMode = contactPara.style.writingMode = "horizontal-tb";
    aboutPara.style.visibility = projectsPara.style.visibility = contactPara.style.visibility = "visible";
    aboutDiv.style.alignItems = "center";
    contactForm.style.display = "none";
}