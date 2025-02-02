document.addEventListener("DOMContentLoaded", () => {
    const formSubmit = document.getElementById("submit");
    const inputs = document.querySelectorAll("#name_input, #lastname_input, #emailInput, #textArea, #general_Enquiry, #support_Request");
    const formRequiredField = document.querySelector(".form__requiredField");

    formSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        let hasError = false;

        inputs.forEach(input => {
            if (!input.value) {
                input.style.border = "2px solid red";
                hasError = true;
            }
        });

        formRequiredField.style.display = hasError ? "block" : "none";
    });

    // Hide error message and reset border when user starts typing
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.style.border = "1px solid #ccc";
            formRequiredField.style.display = "none";
        });
    });
});



// const nameInput = document.getElementById("name_input");
// const form__requiredField = document.getElementsByClassName("form__requiredField")
// const lastNameInput = document.getElementById("lastname_input");
// const formSubmit = document.getElementById("submit")
// const email = document.getElementById("emailInput")
// const textArea = document.getElementById("textArea")
// const supportRequest = document.getElementById("support_Request")
// const generalEnquiry = document.getElementById("general_Enquiry")
// const Input = document.querySelector("input")




// formSubmit.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(!nameInput.value ){
//         form__requiredField.style.display="block";
//         nameInput.style.border="2px solid red"
//     }
//     if(!lastNameInput.value){
//         form__requiredField.style.display="block";
//         lastNameInput.style.border="2px solid red"
//     }
//     if(!email.value){
//         form__requiredField.style.display="block";
//         email.style.border="2px solid red"
//     }
//     if(!textArea.value){
//         form__requiredField.style.display="block";
//         textArea.style.border="2px solid red"
//     }
//     if(!generalEnquiry.value){
//         form__requiredField.style.display="block";
//         generalEnquiry.style.border="2px solid red"
//     }
//     if(!supportRequest.value){
//         form__requiredField.style.display="block";
//         supportRequest.style.border="2px solid red"
//     }
//     console.log(nameInput.value, lastNameInput.value)
// },
// );

// Input.addEventListener("click", (event) => {
//     // event.preventDefault();
//     if(!nameInput.value ){
//         form__requiredField.style.display="none";
//         nameInput.style.border="2px solid green"
//     }
//     console.log("focusing on input")
// })