function emailFn() {
  //get form
  const form = document.querySelector("form");

  //formFn
  function formFn(e) {
    e.preventDefault();
    //get email
    const email = form.querySelector("[type=email]");

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value == "") {
      showErr(email, "enter an email address");
    } else if (re.test(email.value.trim())) {
      showSuccess(email);
    } else {
      showErr(email, "enter a valid email address");
    }

    form.reset();
  }

  //showErr Fn

  function showErr(input, message) {
    //get parent
    const parent = input.parentElement;

    //add error class
    input.classList.add("error");

    //get small

    const small = parent.querySelector("small");

    //set message
    small.textContent = message;

    //get icon
    const icon = document.querySelector(".icon");

    //add class
    icon.classList.add("show");
  }

  function showSuccess(input) {
    //add error class
    input.classList.remove("error");

    //get small

    const small = document.querySelector("small");

    //set message
    small.textContent = "";
  }

  //events

  form.addEventListener("submit", formFn);
}

//window-event
window.addEventListener("DOMContentLoaded", emailFn);
