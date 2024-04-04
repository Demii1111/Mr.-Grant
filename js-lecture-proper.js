document.getElementById("registrationform").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = {
        Surname: document.querySelector(".Surname").value.trim(),
        Firstname: document.querySelector(".Firstname").value.trim(),
        Middlename: document.querySelector(".Middlename").value.trim(),
        Age: document.querySelector(".Age").value.trim(),
        Gender: document.querySelector('input[name="Gender"]:checked').value,
        Email: document.getElementById("Email").value.trim(),
        Username: document.getElementById("Username").value.trim(),
        Password: document.getElementById("Password").value.trim(),
        RepeatPassword: document.getElementById("RepeatPassword").value.trim()
    };

    console.log(formData);
})