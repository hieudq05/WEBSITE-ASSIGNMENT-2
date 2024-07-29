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
            txt[index_input].style.border = "1px solid red";
            lbl[index_input].style.transform = "scale(1)";
        } else {
            lbl[index_input].style.color = "black";
            txt[index_input].style.border = "1px solid black";
        }
    });
}

const showPassword = document.querySelectorAll("#showPassword");
const imgShow = "/image/show.png";
const imgHide = "/image/hide.png";
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
reEnterPassword.addEventListener("keyup", () => {
    if (reEnterPassword.value != password.value) {
        reEnterPassword.style.color = "red";
        reEnterPassword.style.border = "1px solid red";
    } else {
        reEnterPassword.style.color = "black";
    }
});

const btnSignup = document.getElementById("signup");
btnSignup.addEventListener("click", () => {});
