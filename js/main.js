/* =========================================
   THARUNYA DANCE ACADEMY
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 1000);
        }

    }, 1500);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


/* =========================================
   CREATE FLOATING PARTICLES
========================================= */

const particlesContainer =
    document.getElementById("particles");


if (particlesContainer) {

    const particleCount = 45;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");


        particle.classList.add("particle");


        /* Random position */

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            Math.random() * 3 + 1;


        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";


        /* Random animation */

        const duration =
            Math.random() * 8 + 5;

        const delay =
            Math.random() * 5;


        particle.style.animation =
            `particleFloat ${duration}s ${delay}s infinite ease-in-out`;


        particlesContainer.appendChild(particle);

    }

}


/* =========================================
   PARTICLE ANIMATION
========================================= */

const particleStyle =
    document.createElement("style");


particleStyle.innerHTML = `

@keyframes particleFloat {

    0% {

        transform:
            translate(0, 0)
            scale(1);

        opacity: 0;

    }

    20% {

        opacity: 0.5;

    }

    50% {

        transform:
            translate(
                20px,
                -40px
            )
            scale(1.5);

        opacity: 0.8;

    }

    80% {

        opacity: 0.4;

    }

    100% {

        transform:
            translate(
                -20px,
                -80px
            )
            scale(0.5);

        opacity: 0;

    }

}

`;


document.head.appendChild(particleStyle);


/* =========================================
   LIVE CLOCK
========================================= */

function updateLiveTime() {

    const liveTime =
        document.getElementById("liveTime");


    if (!liveTime) return;


    const now = new Date();


    let hours = now.getHours();

    const minutes =
        String(now.getMinutes()).padStart(2, "0");


    let period = "AM";


    if (hours >= 12) {
        period = "PM";
    }


    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }


    liveTime.textContent =
        `${String(hours).padStart(2, "0")}:${minutes} ${period}`;

}


updateLiveTime();


setInterval(updateLiveTime, 1000);