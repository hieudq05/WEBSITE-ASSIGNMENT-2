const txtEmail = document.getElementById("txtUsername");
const lblEmail = document.getElementById("label_email");
const txtPassword = document.getElementById("txtPassword");
const lblPassword = document.getElementById("label_password");

txtEmail.addEventListener("focus", () => {
    lblEmail.style.top = "20px";
    lblEmail.style.color = "black";
    lblEmail.style.transform = "scale(0.85)";
});

txtEmail.addEventListener("blur", () => {
    if (txtEmail.value === "") {
        lblEmail.style.top = "45px";
        lblEmail.style.color = "red";
        txtEmail.style.border = "1px solid red";
        lblEmail.style.transform = "scale(1)";
    } else {
        lblEmail.style.color = "black";
        txtEmail.style.border = "1px solid black";
    }
});

txtPassword.addEventListener("focus", () => {
    lblPassword.style.top = "20px";
    lblPassword.style.color = "black";
    lblPassword.style.transform = "scale(0.85)";
});

txtPassword.addEventListener("blur", () => {
    if (txtPassword.value === "") {
        lblPassword.style.top = "45px";
        lblPassword.style.color = "red";
        txtPassword.style.border = "1px solid red";
        lblPassword.style.transform = "scale(1)";
    } else {
        lblPassword.style.color = "black";
        txtPassword.style.border = "1px solid black";
    }
});
