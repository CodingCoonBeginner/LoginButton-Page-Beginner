const btn = document.querySelector('#btn'),
    loginContainer = document.querySelector('.container'),
    x = document.querySelector('#x-btn'),
    cancel = document.querySelector('#cancel'),
    Forgot = document.querySelector('#Forgot');


btn.addEventListener("click", () => {
    btn.style.display = "none";
    loginContainer.style.display = "block";
});

x.addEventListener("click", () => {
    loginContainer.style.display = "none";
    btn.style.display = "block";
});

cancel.addEventListener("click", () => {
    loginContainer.style.display = "none";
    btn.style.display = "block";
});

Forgot.addEventListener("click", () => {
    alert("Hey! Don't have a page for you now!")
});