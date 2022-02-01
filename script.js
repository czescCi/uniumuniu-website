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
let projectsIcon = document.getElementById("projects-icon");
let contactIcon = document.getElementById("contact-icon");
let logo = document.getElementById("logo");
let submitBtn = document.getElementById("submit-btn");
let projectsContainer = document.getElementById("project-container");
let aboutContent = document.getElementById("about-content");

let logoSmallSize = "100px";
let logoNormalSize = "300px";
let bgColorOver = "#f8a23a";
let bgColor = "#131b26";
let iconSmall = "70px";
let iconMarginTop = "15px";
<<<<<<< HEAD

let addBorderBetweenNonActivesDivs = (div1, div2) => {
    if (div1 === projectsDiv && div2 === contactDiv) {
        projectsDiv.style.borderRight = "1px solid #f8a23a";
    } else if (div1 === aboutDiv && div2 === projectsDiv) {
        aboutDiv.style.borderRight = "1px solid #f8a23a";
    }
}
=======
>>>>>>> 0dba1183b29d8158eb28f7dacd0dad9986e9948d

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
        logo.style.width = logo.style.height = logoNormalSize;
        projectsIcon.style.fontSize = contactIcon.style.fontSize = iconSmall;
        projectsIcon.style.marginTop = contactIcon.style.marginTop = iconMarginTop;
    } else if (div.classList.contains("active") && div === projectsDiv) {
        contactIcon.style.fontSize = iconSmall;
        contactIcon.style.marginTop = iconMarginTop;
        logo.style.width = logo.style.height = logoSmallSize;
    } else if (div.classList.contains("active") && div === contactDiv) {
        projectsIcon.style.fontSize = iconSmall;
        projectsIcon.style.marginTop = iconMarginTop;
        logo.style.width = logo.style.height = logoSmallSize;
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
        projectsIcon.style.display = "inline"
        contactIcon.style.display = "inline"
    } else {
<<<<<<< HEAD
        aboutContent.style.display = "none";
=======
        aboutContent.style.display  = "none";
>>>>>>> 0dba1183b29d8158eb28f7dacd0dad9986e9948d
    }
}

let visibilityOfProjectList = (div) => {
    if (div.classList.contains("active") && div === projectsDiv) {
        projectsContainer.style.display = "flex";
        projectsIcon.style.display = "none";
        contactIcon.style.display = "inline"
    } else {
        projectsContainer.style.display = "none";
    }
}

let visibilityOfContactForm = (div) => {
    if (div.classList.contains("active") && div === contactDiv) {
        contactForm.style.display = "inline";
        contactIcon.style.display = "none";
        projectsIcon.style.display = "inline"
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
    addBorderBetweenNonActivesDivs(projectsDiv, contactDiv);
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
    addBorderBetweenNonActivesDivs(aboutDiv, projectsDiv);
}

let resetAllDivs = () => {
    changeLogo(aboutDiv);
    removeActiveClass(aboutDiv, aboutPara);
    removeActiveClass(projectsDiv, projectsPara);
    removeActiveClass(contactDiv, contactPara);
}