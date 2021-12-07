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
let logoSmallSize = "100px";
let logoNormalSize = "300px";
let bgColorOver = "#f8a23a";
let bgColor = "#131b26";

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

let changeLogo = (div) => {
    if (div.classList.contains("active") && div === aboutDiv) {
        logo.style.width = logo.style.height = logoNormalSize;
    } else {
        logo.style.width = logo.style.height = logoSmallSize;
    }
}

let bgColorChange = function(div) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("mouseover", function() {
            changeColor(navItems[i], navPara[i], true);
        });
        
        if (div.classList.contains("active")) {
                
        } else {
            navItems[i].addEventListener("mouseout", function() {
                changeColor(navItems[i], navPara[i], false);
            });
        }
        
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

let isContactFormVisible = (div) => {
    if (div.classList.contains("active") && div === contactDiv) {
        contactForm.style.display = "inline";
    } else {
        contactForm.style.display = "none";
    }
}

aboutDiv.onclick = () => {
    resetAllDivs();
    addActiveClass(aboutDiv, aboutPara);
    isContactFormVisible(aboutDiv);
    changeLogo(aboutDiv)
    bgColorChange(aboutDiv);
}

projectsDiv.onclick = () => {
    resetAllDivs();
    addActiveClass(projectsDiv, projectsPara);
    isContactFormVisible(projectsDiv);
    changeLogo(projectsDiv);
    bgColorChange(projectsDiv);
}

contactDiv.onclick = () => {
    resetAllDivs();
    addActiveClass(contactDiv, contactPara);
    isContactFormVisible(contactDiv);
    changeLogo(contactDiv);
    bgColorChange(contactDiv);
}

let resetAllDivs = () => {
    changeLogo(aboutDiv);
    removeActiveClass(aboutDiv, aboutPara);
    removeActiveClass(projectsDiv, projectsPara);
    removeActiveClass(contactDiv, contactPara);
}