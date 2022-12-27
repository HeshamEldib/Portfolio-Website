// Page loading animation
const loaderContainer = document.querySelector('#js-preloader');
window.addEventListener('load', () => {
    loaderContainer.classList.add("loaded");
});

// header
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }
});

// light and dark
let mode = document.querySelector("header .mode");
let lightIcon = document.querySelector("header .mode .light");
let darkIcon = document.querySelector("header .mode .dark");
let nameColor = ["--mode-bag", "--mode-color", "--mode-color-trans", "--mode-header", "--mode-meine", "--mode-bg-skilles", "--mode-bg-hover-skilles", "--mode-bg-projects", "--mode-bg-hover-projects"];
let darkColor = ["#202020", "#e5e5e5", "#ffffff82", "#333533", "#2f4550", "#5c5c5c6e", "#625d5d7e", "#2f3134", "#343a40"];
let lightColor = ["#faf9f9", "#011627", "#24222263", "#d6d6d6", "#eff1f3", "#c6c6c66e", "#e6e1e17e", "#ced4da", "#adb5bd"];

let localIcon = localStorage.getItem("test");
if (localIcon !== null) {
    if (localStorage.getItem("test") === "dark") {
        lightIcon.classList.remove("visible");
        darkIcon.classList.add("visible");
    } else {
        lightIcon.classList.add("visible");
        darkIcon.classList.remove("visible");
    }
}

let localMode = localStorage.getItem(nameColor[0]);
if (localMode !== null) {
    for (let i = 0; i < nameColor.length; i++) {
        document.documentElement.style.setProperty(nameColor[i], localStorage.getItem(nameColor[i]));
    }
}

mode.addEventListener("click", () => {
    darkIcon.classList.toggle("visible");
    lightIcon.classList.toggle("visible");
    
    if (darkIcon.classList.contains("visible")) {
        localStorage.setItem("test", "dark");
        for (let i = 0; i < nameColor.length; i++) {
            document.documentElement.style.setProperty(nameColor[i], darkColor[i]);
            localStorage.setItem(nameColor[i], darkColor[i]);
        }
    } else {
        localStorage.setItem("test", "light");
        for (let i = 0; i < nameColor.length; i++) {
            document.documentElement.style.setProperty(nameColor[i], lightColor[i]);
            localStorage.setItem(nameColor[i], lightColor[i]);
        }
    }
})

// meine
let icon = document.querySelector("header .meine .icon");
let meine = document.querySelector("header .meine ul");

icon.addEventListener("click", (el) => {
    meine.classList.toggle("open");
    el.stopPropagation();
});

meine.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.body.addEventListener("click", (e) => {
    if (meine.classList.contains("open")) {
        if (e.target !== meine) {
            meine.classList.toggle("open");
        }
    }
});

// linkes
let linkes = document.querySelectorAll("header ul a");
linkes.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.querySelectorAll("header ul a.active").forEach((a) => {
            a.classList.remove("active");
        });
        e.target.classList.add("active");
    })
});

let section = document.querySelectorAll("section");
window.onscroll = () => {
    section.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 60 && window.scrollY <= s.offsetHeight + s.offsetTop) {
            document.querySelectorAll("header ul a.active").forEach((a) => {
                a.classList.remove("active");
            });
            document.querySelector("#" + s.className).classList.add("active");
        }
    })
}

// home
// buttom
document.querySelector(".home .text .main-button button").onclick = () => {
    window.scroll(0,  document.querySelector(".contact").offsetTop - 70)
};

// skills 
// button

let down = document.querySelectorAll(".skills .content .down");
down.forEach((d) => {
    d.addEventListener("click", (e) => {
        document.querySelector(`.skills .content .${e.target.dataset.box} .description`).classList.toggle("show");
        e.stopPropagation;
    })
});



