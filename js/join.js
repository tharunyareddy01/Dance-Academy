/* =========================================
   THARUNYA DANCE ACADEMY
   JOIN PAGE JAVASCRIPT
========================================= */


const joinForm = document.getElementById("joinForm");


if (joinForm) {

    joinForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("studentName").value.trim();


        const age =
            document.getElementById("studentAge").value;


        const email =
            document.getElementById("studentEmail").value.trim();


        const phone =
            document.getElementById("studentPhone").value.trim();


        const dance =
            document.getElementById("danceChoice").value;


        const levelElement =
            document.querySelector(
                'input[name="level"]:checked'
            );


        if (!levelElement) {

            alert("Please select your experience level.");

            return;

        }


        const level =
            levelElement.value;


        /*
        =========================================
        SAVE APPLICATION
        =========================================
        */


        const application = {

            name: name,

            age: age,

            email: email,

            phone: phone,

            dance: dance,

            level: level,

            date: new Date().toLocaleDateString()

        };


        localStorage.setItem(

            "tharunyaApplication",

            JSON.stringify(application)

        );


        /*
        =========================================
        SUCCESS MESSAGE
        =========================================
        */


        showSuccess(name, dance);

    });

}


/* =========================================
   SUCCESS MESSAGE
========================================= */

function showSuccess(name, dance) {


    const overlay =
        document.createElement("div");


    overlay.className =
        "success-overlay";


    overlay.innerHTML = `

        <div class="success-box">

            <div class="success-lotus">
                🪷
            </div>

            <span>
                APPLICATION RECEIVED
            </span>

            <h2>
                Welcome,
                <strong>${name}</strong>
            </h2>

            <p>
                Your journey with
                <strong>Tharunya Dance Academy</strong>
                is about to begin.
            </p>

            <div class="success-dance">
                ${dance}
            </div>

            <button id="closeSuccess">
                CONTINUE YOUR JOURNEY
            </button>

        </div>

    `;


    document.body.appendChild(overlay);


    document
        .getElementById("closeSuccess")
        .addEventListener("click", function () {

            overlay.remove();

            joinForm.reset();

        });

}