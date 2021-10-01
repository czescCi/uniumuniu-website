new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "left",
    animateTime: 0.7,
    animateFunction: "ease",
});

// function activateNavigation() {
//     const sections = document.querySelectorAll(".section");
//     const navContainer = document.createElement("nav");
//     const navItems = Array.from(sections).map((section) => {
//       return `
//                       <div class="nav-item" data-for-section="${section.id}">
//                           <a href="#${section.id}" class="nav-link"></a>
//                           <span class="nav-label">${section.dataset.label}</span>
//                       </div>
//                   `;
//     });

//     navContainer.classList.add("nav");
//     navContainer.innerHTML = navItems.join("");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         document.querySelectorAll(".nav-link").forEach((navLink) => {
//           navLink.classList.remove("nav-link-selected");
//         });

//         const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

//         document
//           .querySelector(
//             `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
//           )
//           .classList.add("nav-link-selected");
//       },
//       { threshold: 0.5 }
//     );

//     sections.forEach((section) => observer.observe(section));

//     document.body.appendChild(navContainer);
//   }

//   activateNavigation();


// MY SOLUTION

const logo = document.getElementById('logo');

logo.onclick = function() {
    let splitedFullFileName = this.src.split('/');
    let fileName = splitedFullFileName[splitedFullFileName.length - 1];
    if (fileName === "logo.png") {
        logo.src = "res/logo_orange.png";
    } else {
        logo.src = "res/logo.png";
    }
}

// ///C:/Projects/uniumuniu-website/res/logo.png