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
let smallLogo = document.getElementById("small-logo");
let normalLogo = document.getElementById("normal-logo");
let submitBtn = document.getElementById("submit-btn");
let projectsContainer = document.getElementById("project-container");
let aboutContent = document.getElementById("about-content");
let logoSmallSize = "100px";
let logoNormalSize = "300px";
let bgColorOver = "#f8a23a";
let bgColor = "#131b26";

let addMouseEventListeners = function() {
    for (let i = 0; i < navItems.length; i++) {
        let div = navItems[i];
        navItems[i].addEventListener("mouseover", function() {
            changeColor(navItems[i], navPara[i], true);
        });

        navItems[i].addEventListener("mouseout", function() {
            if (!div.classList.contains("active")) {
                changeColor(navItems[i], navPara[i], false);
            }
        });
    }
}

addMouseEventListeners();

let changeColor = (div, para, toActive) => {
    if (toActive) {
        div.style.backgroundColor = bgColorOver;
        para.style.color = bgColor;
    } else {
        div.style.backgroundColor = bgColor;
        para.style.color = bgColorOver;
    }
}

let changeLogo = (div) => {
    if (div.classList.contains("active") && div === aboutDiv) {
        normalLogo.style.display = "flex";
    } else {
        smallLogo.style.display = "flex";
        smallLogo.style.alignSelf = "flex-start";
    }
}

let addActiveClass = (div, para) => {
    div.classList.add("active");
    div.classList.remove("nonactive");
    para.classList.remove("nonactive-para");
    para.classList.add("active-para");
}

let removeActiveClass = (div, para) => {
    div.classList.remove("active");
    div.classList.add("nonactive");
    para.classList.remove("active-para");
    para.classList.add("nonactive-para");
}

let visibilityOfaboutContent = (div) => {
    if (div.classList.contains("active") && div === aboutDiv) {
        aboutContent.style.display = "flex";
    } else {
        aboutContent.style.display  = "none";
    }
}

let visibilityOfProjectList = (div) => {
    if (div.classList.contains("active") && div === projectsDiv) {
        projectsContainer.style.display = "flex";
    } else {
        projectsContainer.style.display  = "none";
    }
}

let visibilityOfContactForm = (div) => {
    if (div.classList.contains("active") && div === contactDiv) {
        contactForm.style.display = "inline";
    } else {
        contactForm.style.display = "none";
    }
}

aboutDiv.onclick = () => {
    resetAllDivs();
    addActiveClass(aboutDiv, aboutPara);
    visibilityOfContactForm(aboutDiv);
    visibilityOfProjectList(aboutDiv);
    visibilityOfaboutContent(aboutDiv);
    changeLogo(aboutDiv)
    changeColor(projectsDiv, projectsPara, false);
    changeColor(contactDiv, contactPara, false);
}

projectsDiv.onclick = () => {
    resetAllDivs();
    addActiveClass(projectsDiv, projectsPara);
    visibilityOfContactForm(projectsDiv);
    visibilityOfProjectList(projectsDiv);
    visibilityOfaboutContent(projectsDiv);
    changeLogo(projectsDiv);
    changeColor(aboutDiv, aboutPara, false);
    changeColor(contactDiv, contactPara, false);
}

contactDiv.onclick = () => {
    resetAllDivs();
    addActiveClass(contactDiv, contactPara);
    visibilityOfContactForm(contactDiv);
    visibilityOfProjectList(contactDiv);
    visibilityOfaboutContent(contactDiv);
    changeLogo(contactDiv);
    changeColor(aboutDiv, aboutPara, false);
    changeColor(projectsDiv, projectsPara, false);
}

let resetAllDivs = () => {
    changeLogo(aboutDiv);
    removeActiveClass(aboutDiv, aboutPara);
    removeActiveClass(projectsDiv, projectsPara);
    removeActiveClass(contactDiv, contactPara);
}