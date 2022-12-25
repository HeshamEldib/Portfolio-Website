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
let nameColor = ["--mode-bag", "--mode-color"];
let darkColor = ["#14213d", "#e5e5e5"];
let lightColor = ["#fff", "#111"];

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
    lightIcon.classList.toggle("visible");
    darkIcon.classList.toggle("visible");
    
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
        if (window.scrollY >= s.offsetTop - 50 && window.scrollY <= s.offsetHeight + s.offsetTop) {
            document.querySelectorAll("header ul a.active").forEach((a) => {
                a.classList.remove("active");
            });
            document.querySelector("#" + s.className).classList.add("active");
        }
    })
}

// skills 

// button

let down = document.querySelectorAll(".skills .content .down");
down.forEach((d) => {
    d.addEventListener("click", (e) => {
        document.querySelector(`.skills .content .${e.target.dataset.box} .description`).classList.toggle("show");
        e.stopPropagation;
    })
});



