/* =========================================
   THARUNYA DANCE ACADEMY
   OUR STORY JAVASCRIPT
========================================= */


/* =========================================
   ANIMATED STATISTICS
========================================= */

const numberElements =
    document.querySelectorAll(".number-box strong");


let numbersStarted = false;


function animateNumbers() {

    if (numbersStarted) return;

    numbersStarted = true;


    numberElements.forEach(function (element) {

        const target =
            parseInt(
                element.getAttribute("data-target")
            );


        let current = 0;


        const increment =
            Math.max(
                1,
                Math.ceil(target / 80)
            );


        const counter =
            setInterval(function () {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(counter);

                }


                element.textContent =
                    current;

            }, 25);

    });

}



/* =========================================
   INTERSECTION OBSERVER
========================================= */

const numberSection =
    document.querySelector(".story-numbers");


if (numberSection) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateNumbers();

                    }

                });

            },

            {
                threshold: 0.3
            }

        );


    observer.observe(numberSection);

}



/* =========================================
   TIMELINE REVEAL
========================================= */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


const timelineObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "timeline-visible"
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


timelineItems.forEach(function (item) {

    timelineObserver.observe(item);

});



/* =========================================
   MENTOR IMAGE PARALLAX
========================================= */

const mentorImage =
    document.querySelector(".mentor-image");


window.addEventListener(
    "scroll",
    function () {

        if (!mentorImage) return;


        const rect =
            mentorImage.getBoundingClientRect();


        const windowHeight =
            window.innerHeight;


        if (
            rect.top < windowHeight &&
            rect.bottom > 0
        ) {

            const progress =
                (windowHeight - rect.top)
                /
                (windowHeight + rect.height);


            const movement =
                (progress - 0.5) * 20;


            mentorImage.style.transform =
                `translateY(${movement}px)`;

        }

    }
);



/* =========================================
   MOUSE GLOW
========================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        const hero =
            document.querySelector(".story-hero");


        if (!hero) return;


        const x =
            event.clientX;


        const y =
            event.clientY;


        hero.style.setProperty(
            "--mouse-x",
            x + "px"
        );


        hero.style.setProperty(
            "--mouse-y",
            y + "px"
        );

    }
);