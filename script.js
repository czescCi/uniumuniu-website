let navItems = document.querySelectorAll(".nav-div");
let navPara = document.querySelectorAll(".nav-para");
let aboutDiv = document.getElementById("about");
let projectsDiv = document.getElementById("projects");
let contactDiv = document.getElementById("contact");
let aboutPara = document.getElementById("about-para");
let projectsPara = document.getElementById("projects-para");
let contactPara = document.getElementById("contact-para");
let logo = document.getElementById("logo");

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

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseover", function() {
    navItems[i].style.backgroundColor = "#f8a23a";
    navPara[i].style.color = "#131b26";
  });

  navItems[i].addEventListener("mouseout", function() {
    navItems[i].style.backgroundColor = "#131b26";
    navPara[i].style.color = "#f8a23a";
  });
}

aboutDiv.onclick = function() {
  aboutDiv.style.flexGrow = "6";
  projectsPara.style.visibility = "hidden";
  contactPara.style.visibility = "hidden";
}

projectsDiv.onclick = function() {
  projectsDiv.style.flexGrow = "6";
  // aboutDiv.style.justifyContent = "flex-start";
  aboutDiv.style.alignItems = "stretch";
  aboutPara.style.visibility = "hidden";
  contactPara.style.visibility = "hidden";
  logo.style.width = "100px";
  logo.style.height = "100px";
}

contactDiv.onclick = function() {
  contactDiv.style.flexGrow = "6";
  // aboutDiv.style.justifyContent = "flex-start";
  aboutDiv.style.alignItems = "stretch";
  aboutPara.style.visibility = "hidden";
  projectsPara.style.visibility = "hidden";
  logo.style.width = "100px";
  logo.style.height = "100px";
}
