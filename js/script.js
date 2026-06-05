document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname");
    const fnameError = document.getElementById("fnameError");

    fnameError.textContent = "";
    let isvalid = true;
    if (fname.value.trim() === "") {
      fnameError.textContent = "This field is required.";
      isvalid = false;
    }

    if (isvalid){
        alert("Form submitted!");
    }
  });
});