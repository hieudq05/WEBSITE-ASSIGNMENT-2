const txt = document.querySelectorAll(
    "input[type='email'], input[type='password']"
);
const lbl = document.querySelectorAll("label");
for (let index_input = 0; index_input < txt.length; index_input++) {
    txt[index_input].addEventListener("focus", () => {
        lbl[index_input].style.top = "20px";
        lbl[index_input].style.color = "black";
        lbl[index_input].style.transform = "scale(0.85)";
    });

    txt[index_input].addEventListener("blur", () => {
        if (txt[index_input].value === "") {
            lbl[index_input].style.top = "45px";
            lbl[index_input].style.color = "red";
            lbl[index_input].style.transform = "scale(1)";
            txt[index_input].style.borderColor = "red";
        } else {
            lbl[index_input].style.color = "black";
            txt[index_input].style.borderColor = "black";
        }
    });
}

const showPassword = document.querySelectorAll("#showPassword");
const imgShow = "./image/show.png";
const imgHide = "./image/hide.png";
for (
    let index_show_hide = 0;
    index_show_hide < showPassword.length;
    index_show_hide++
) {
    showPassword[index_show_hide].addEventListener("click", () => {
        if (showPassword[index_show_hide].getAttribute("src") === imgShow) {
            showPassword[index_show_hide].setAttribute("src", imgHide);
            txt[index_show_hide + 1].type = "text";
        } else {
            showPassword[index_show_hide].setAttribute("src", imgShow);
            txt[index_show_hide + 1].type = "password";
        }
    });
}

const reEnterPassword = document.getElementById("txtReEnterPassword");
const password = document.getElementById("txtPassword");
const statusReEnterPassword = document.getElementById("statusReEnterPassword");
reEnterPassword.addEventListener("keyup", () => {
    if (reEnterPassword.value != password.value) {
        statusReEnterPassword.innerHTML = "Mật khẩu không trùng khớp";
        statusReEnterPassword.style.color = "red";
        statusReEnterPassword.style.margin = "15px 0 0 0";
    } else {
        reEnterPassword.style.color = "black";
        reEnterPassword.style.borderColor = "black";
        statusReEnterPassword.style.margin = "0";
        statusReEnterPassword.innerHTML = "";
    }
});
password.addEventListener("keyup", () => {
    if (reEnterPassword.value != password.value) {
        statusReEnterPassword.innerHTML = "Mật khẩu không trùng khớp";
        statusReEnterPassword.style.color = "red";
        statusReEnterPassword.style.margin = "15px 0 0 0";
    } else {
        reEnterPassword.style.color = "black";
        reEnterPassword.style.borderColor = "black";
        statusReEnterPassword.style.margin = "0";
        statusReEnterPassword.innerHTML = "";
    }
});
reEnterPassword.addEventListener("blur", () => {
    if (
        password.value !== reEnterPassword.value &&
        reEnterPassword.value === ""
    ) {
        reEnterPassword.style.borderColor = "red";
    } else if (
        password.value === reEnterPassword.value &&
        reEnterPassword.value !== ""
    ) {
        reEnterPassword.style.borderColor = "black";
    }
});

const btnSignup = document.getElementById("signup").parentNode.parentNode;
btnSignup.addEventListener("submit", function (event) {
    event.preventDefault();
    if (statusReEnterPassword.innerHTML === "") {
        let notice = document.getElementsByClassName("notice")[0];
        notice.style.display = "flex";
    }
});