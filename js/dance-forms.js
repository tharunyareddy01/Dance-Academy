/* =========================================
   THARUNYA DANCE ACADEMY
   DANCE FORMS JAVASCRIPT
========================================= */


/* =========================================
   FILTER SYSTEM
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const formCards =
    document.querySelectorAll(".form-card");

const formCount =
    document.getElementById("formCount");


function updateCards(filter) {

    let visibleCount = 0;


    formCards.forEach(function (card) {

        const region =
            card.getAttribute("data-region");


        if (
            filter === "all" ||
            region === filter
        ) {

            card.style.display = "block";

            visibleCount++;

            setTimeout(function () {

                card.style.opacity = "1";

                card.style.transform =
                    "translateY(0)";

            }, 30);

        }

        else {

            card.style.display = "none";

        }

    });


    if (formCount) {

        formCount.textContent =
            String(visibleCount).padStart(2, "0");

    }


    updateNoResults();

}


/* =========================================
   FILTER BUTTON CLICK
========================================= */

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        updateCards(filter);


        /* Clear search */

        const search =
            document.getElementById("danceSearch");

        if (search) {

            search.value = "";

        }

    });

});


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById("danceSearch");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {


            const searchValue =
                searchInput.value
                    .toLowerCase()
                    .trim();


            let visibleCount = 0;


            formCards.forEach(function (card) {


                const name =
                    card
                        .getAttribute("data-name")
                        .toLowerCase();


                if (
                    name.includes(searchValue)
                ) {

                    card.style.display =
                        "block";

                    visibleCount++;

                }

                else {

                    card.style.display =
                        "none";

                }

            });


            if (formCount) {

                formCount.textContent =
                    String(visibleCount)
                        .padStart(2, "0");

            }


            updateNoResults();

        }
    );

}


/* =========================================
   NO RESULTS
========================================= */

function updateNoResults() {

    const noResults =
        document.getElementById("noResults");


    let visible = 0;


    formCards.forEach(function (card) {

        if (
            card.style.display !== "none"
        ) {

            visible++;

        }

    });


    if (noResults) {

        if (visible === 0) {

            noResults.style.display =
                "block";

        }

        else {

            noResults.style.display =
                "none";

        }

    }

}


/* =========================================
   EXPLORE BUTTON
========================================= */

const exploreButtons =
    document.querySelectorAll(".explore-form");


exploreButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();


        const formName =
            button.getAttribute("data-form");


        alert(
            `${formName}\n\nMore details about ${formName} will be available soon at Tharunya Dance Academy.`
        );

    });

});