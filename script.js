let navItem = document.querySelector(".nav-div");
let navPara = document.querySelector(".nav-para");

let mouseOverBgdColor = function() {
    navItem.style.backgroundColor === "#f8a23a";
    navPara.style.color === "#131b26";
}

let mouseOutBgdColor = function() {
  navItem.style.backgroundColor = "#131b26";
  navPara.style.color = "#f8a23a";
}

navItem.addEventListener("mouseover", mouseOverBgdColor());

navItem.addEventListener("mouseout", mouseOutBgdColor());


navItem.onclick = function() {
  navItem.style.flexGrow = "6";
  navPara.style.visibility = "hidden";
}