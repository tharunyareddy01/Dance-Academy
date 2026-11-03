/* =========================================
   THARUNYA DANCE ACADEMY
   CLASSES PAGE JAVASCRIPT
========================================= */


/* =========================================
   CLASS FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const classCards =
    document.querySelectorAll(".class-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Remove active from all buttons */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        /* Add active to clicked button */

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        /* Show / hide cards */

        classCards.forEach(function(card) {

            const level =
                card.getAttribute("data-level");


            if (filter === "all" || level === filter) {

                card.classList.remove("hide");

            }

            else {

                card.classList.add("hide");

            }

        });

    });

});



/* =========================================
   SMOOTH SCROLL
========================================= */

const classScroll =
    document.querySelector(".class-scroll");


if (classScroll) {

    classScroll.addEventListener("click", function(event) {

        event.preventDefault();


        const target =
            document.querySelector("#classes");


        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}



/* =========================================
   CARD GLOW FOLLOW MOUSE
========================================= */

classCards.forEach(function(card) {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        card.style.background = `

            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,208,132,0.10),
                rgba(3,20,15,0.75) 45%
            )

        `;

    });


    card.addEventListener("mouseleave", function() {

        card.style.background = "";

    });

});