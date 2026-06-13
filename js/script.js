const menuBtn =
document.getElementById("menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

function updateLanguage(lang){

    document
    .querySelectorAll("[data-key]")
    .forEach(element=>{

        const key =
        element.getAttribute("data-key");

        if(translations[lang][key]){

            element.textContent =
            translations[lang][key];

        }

    });

}

function changeLanguage(lang){

    localStorage.setItem(
        "language",
        lang
    );

    updateLanguage(lang);

    document
    .querySelectorAll(".lang-btn")
    .forEach(btn=>{

        btn.classList.remove(
            "active-language"
        );

    });

    document
    .getElementById(lang)
    .classList.add(
        "active-language"
    );

}

document.addEventListener(
"DOMContentLoaded",
()=>{

    const savedLanguage =
    localStorage.getItem("language")
    || "es";

    updateLanguage(savedLanguage);

    document
    .getElementById(savedLanguage)
    .classList.add(
        "active-language"
    );

});