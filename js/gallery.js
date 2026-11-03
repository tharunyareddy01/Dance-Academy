/* =========================================
   THARUNYA DANCE ACADEMY
   GALLERY JAVASCRIPT
========================================= */


/* =========================================
   FILTER SYSTEM
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

const photoCount =
    document.getElementById("photoCount");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active class */

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        let visibleCount = 0;


        galleryItems.forEach(function (item) {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.classList.remove("hide");

                visibleCount++;

            }

            else {

                item.classList.add("hide");

            }

        });


        /* Update counter */

        if (photoCount) {

            photoCount.textContent =
                String(visibleCount).padStart(2, "0");

        }

    });

});



/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


const viewButtons =
    document.querySelectorAll(".view-image");


viewButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        /* Prevent card click */

        event.stopPropagation();


        const image =
            button.getAttribute("data-image");


        lightboxImage.src = image;


        lightbox.classList.add("show");


        document.body.style.overflow = "hidden";

    });

});



/* =========================================
   CLOSE LIGHTBOX
========================================= */

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}



/* =========================================
   CLICK OUTSIDE IMAGE
========================================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}



/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);



/* =========================================
   PERFORMANCE COUNTER
========================================= */

const statNumbers =
    document.querySelectorAll(
        ".performance-stats strong"
    );


let counterStarted = false;


function animateCounters() {

    if (counterStarted) return;

    counterStarted = true;


    statNumbers.forEach(function (counter) {

        const target =
            Number(
                counter.getAttribute("data-target")
            );


        let current = 0;


        const increment =
            target / 60;


        const timer =
            setInterval(function () {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }


                counter.textContent =
                    Math.floor(current) + "+";


            }, 25);

    });

}



/* =========================================
   START COUNTER WHEN VISIBLE
========================================= */

const performanceSection =
    document.querySelector(
        ".performance-section"
    );


if (performanceSection) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateCounters();

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


    observer.observe(performanceSection);

}