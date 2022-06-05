
//---------------------Contact Form Submit
//---------------------Prevents the default submit
//---------------------submit without redirect

const surveyBtn = document.getElementById("courseSurveyBtn");
const surveyForm = document.getElementById("courseSurvey");

const preventForm = (event) => {
    event.preventDefault();
    submitForm();
}

const formClass = document.getElementById("form");
formClass.addEventListener('submit', preventForm);

const submitForm = (event) => {
    let form = new FormData();
    form.append("firstName", document.getElementById("firstName").value);
    form.append("lastName", document.getElementById("lastName").value);
    form.append("company", document.getElementById("company").value);
    form.append("phone", document.getElementById("phone").value);
    form.append("email", document.getElementById("email").value);
    form.append("note", document.getElementById("note").value);
    const options = {
        method: 'POST',
        body: form
    };
    fetch("https://main-api.azurewebsites.net/api/bu/Contact", options)
        .then(res => {
            if (res.ok) {
                formClass.reset();
                let face = document.getElementById("face");
                let back = document.getElementById("back");
                face.style.visibility = "hidden";
                face.style.opacity = "0";
                back.style.visibility = "visible";
                back.style.opacity = "1";
                setTimeout(() => {
                    face.style.visibility = "visible";
                    face.style.opacity = "1";
                    back.style.visibility = "hidden";
                    back.style.opacity = "0";
                }, "1500")

            } else {
                console.log("Not Success");
            }
     })
}

