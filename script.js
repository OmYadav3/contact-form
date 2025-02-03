
const nameInput = document.getElementById("name_input");
const lastNameInput = document.getElementById("lastname_input");
const formSubmit = document.getElementById("submit")
const email = document.getElementById("emailInput")
const textArea = document.getElementById("textArea")
const supportRequest = document.getElementById("support_Request")
const generalEnquiry = document.getElementById("general_Enquiry")
const checkBox = document.getElementById("checkboxtext")
const Input = document.querySelector("input")

const nameDiv = document.getElementById("name-div")
const lastNameDiv = document.getElementById("lastname-div")
const emailDiv = document.getElementById("email-div")
const queryDiv = document.getElementById("query-div")
const textAreaDiv = document.getElementById("textarea-div")
const chechBoxTextDiv = document.getElementById("checkboxtext-div")




formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
   
    switch (!nameInput, !lastNameInput, !email, !supportRequest, !generalEnquiry, !textArea, !checkBox) {
        case !nameInput:
            nameInput.style.border="2px solid red";
            nameDiv.style.display="block";
            // break
        case !lastNameInput:
            lastNameInput.style.border="2px solid red";
            lastNameDiv.style.display="block";

            // break;
        case !email:
            email.style.border="2px solid red";
            emailDiv.style.display="block";

            // break;
        case !supportRequest || !generalEnquiry:
            supportRequest.style.border="2px solid red";
            queryDiv.style.display="block";

            generalEnquiry.style.border="2px solid red";
            queryDiv.style.display="block";

            // break;
        case !textArea:
            textArea.style.border="2px solid red";
            textAreaDiv.style.display="block";

            // break;
        case !checkBox:
            checkBox.style.border="2px solid red";
            chechBoxTextDiv.style.display="block";

            break;
    
        default:
            break;
    }



    console.log(nameInput.value, lastNameInput.value)
},


);

// Input.addEventListener("click", (event) => {
//     event.preventDefault();
//     if(!nameInput.value ){
//         form__requiredField.style.display="none";
//         nameInput.style.border="2px solid green"
//     }
//     console.log("focusing on input")
// })












// document.addEventListener("DOMContentLoaded", () => {
//     const formSubmit = document.getElementById("submit");
//     const inputs = document.querySelectorAll("#name_input, #lastname_input, #emailInput, #textArea, #general_Enquiry, #support_Request");
//     const formRequiredField = document.querySelector(".form__requiredField");

//     formSubmit.addEventListener("click", (e) => {
//         e.preventDefault();
//         let hasError = false;

//         inputs.forEach(input => {
//             if (!input.value) {
//                 input.style.border = "2px solid red";
//                 hasError = true;
//             }
//         });

//         formRequiredField.style.display = hasError ? "block" : "none";
//     });

//     // Hide error message and reset border when user starts typing
//     inputs.forEach(input => {
//         input.addEventListener("input", () => {
//             input.style.border = "1px solid #ccc";
//             formRequiredField.style.display = "none";
//         });
//     });
// });

