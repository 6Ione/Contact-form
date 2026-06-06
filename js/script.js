document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const selectedQuery = document.querySelector('input[name="queryType"]:checked');
    const user_msg = document.getElementById("user_msg");
    const consent_TOS = document.getElementById("consent_TOS");
    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");
    const queryError = document.getElementById("queryError");
    const usermsgError = document.getElementById("usermsgError");
    const consentError = document.getElementById("consentError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    fnameError.textContent = "";
    lnameError.textContent = "";
    emailError.textContent = "";
    queryError.textContent = "";
    usermsgError.textContent = "";
    consentError.textContent = "";

    let isvalid = true;
    if (fname.value.trim() === "") {
        fnameError.textContent = "This field is required.";
        isvalid = false;
    }

    if (lname.value.trim() == "") {
        lnameError.textContent = "This field is required.";
        isvalid = false;
    }

    if (email.value.trim() == "") {
        emailError.textContent = "This field is required.";
        isvalid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isvalid = false;
    }


    if (!selectedQuery) {
        queryError.textContent = "Please select a query type.";
        isvalid = false;
    }

    if (user_msg.value.trim() === "") {
        usermsgError.textContent = "This field is required.";
        isvalid = false;
    }

    if (!consent_TOS.checked) {
        consentError.textContent = "To submit this form, please consent to being contacted.";
        isvalid = false;
    }

    if (isvalid){
        alert(" Message Sent! \n\n Thanks for completing the form. We'll be in touch soon!");
    }
  });
});