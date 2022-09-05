console.log(
  `
  1. Слайдер изображений в секции destinations +50;
  2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50;
  3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету 
     (То есть нажатие не закрывает модал а просто меняет его наполнение). +25
  Общая оценка: 125/125
  `
);

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let closed = document.querySelector(".close");
let closeIcon = document.querySelector(".close-icon");

function closeBurger() {
  closed.classList.toggle("active");
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

menuBtn.addEventListener("click", closeBurger);

closed.addEventListener("click", closeBurger);

closeIcon.addEventListener("click", closeBurger);

let linksBurger = document.querySelectorAll(".menu-link");
for (let i = 0; i < linksBurger.length; i++) {
  linksBurger[i].addEventListener("click", function () {
    closed.classList.toggle("active");
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

let bodyScroll = document.querySelector("body");
let popup = document.querySelector(".pop-up");
let popupBtnDesk = document.querySelector(".pop-up_appear_desk");
let popupBtnMob = document.querySelector(".pop-up_appear_mob");
let logIn = document.querySelector(".content_log_in");
let signUp = document.querySelector(".content_sign_up");
let switchLogin = document.querySelector(".switch_log_in");
let switchSignup = document.querySelector(".switch_sign_up");
let popupContainer = document.querySelector(".content_box");

function openPopup() {
  popup.classList.toggle("active");
  bodyScroll.classList.toggle("active");
  popupContainer.classList.toggle("active");
  logIn.classList.toggle("active");
  popupBtnDesk.disabled = true;
}

function switchSign() {
  signUp.classList.toggle("active");
  logIn.classList.toggle("active");
}

popupBtnDesk.addEventListener("click", openPopup);
popupBtnMob.addEventListener("click", openPopup);

switchLogin.addEventListener("click", switchSign);
switchSignup.addEventListener("click", switchSign);

popup.addEventListener("click", function () {
  if (event.target.classList.contains("pop-up")) {
    popup.classList.toggle("active");
    bodyScroll.classList.toggle("active");
    popupContainer.classList.toggle("active");
    logIn.classList.toggle("active");
    popupBtnDesk.disabled = false;
  }
});

let popupSignIn = document.querySelector(".pop-up_sign-in_button");
let popupSignUp = document.querySelector(".pop-up_sign-up_button");
let emailSignIn = document.querySelector(".input-email_sign-in");
let passwordSignIn = document.querySelector(".input-password_sign-in");
let emailSignUp = document.querySelector(".input-email_sign-up");
let passwordSignUp = document.querySelector(".input-password_sign-up");

popupSignIn.addEventListener("click", function () {
  popup.classList.toggle("active");
  popupContainer.classList.toggle("active");
  logIn.classList.toggle("active");
  popupBtnDesk.disabled = false;
  alert(`E-mail: ${emailSignIn.value}\npassword: ${passwordSignIn.value}`);
});

popupSignUp.addEventListener("click", function () {
  popup.classList.toggle("active");
  popupContainer.classList.toggle("active");
  signUp.classList.toggle("active");
  popupBtnDesk.disabled = false;
  alert(`E-mail: ${emailSignUp.value}\npassword: ${passwordSignUp.value}`);
});

const images = document.querySelectorAll(".slider-desk-img");
const sliderLine = document.querySelector(".slider-desk");
let offset = 37.5;
let dot1Desk = document.querySelector(".desktop_dots .dot1");
let dot2Desk = document.querySelector(".desktop_dots .dot2");
let dot3Desk = document.querySelector(".desktop_dots .dot3");
dot2Desk.classList.add("active");

function desktopDots() {
  if (offset <= -20) {
    dot1Desk.classList.add("active");
    dot2Desk.classList.remove("active");
    dot3Desk.classList.remove("active");
  } else if (offset >= 95) {
    dot1Desk.classList.remove("active");
    dot2Desk.classList.remove("active");
    dot3Desk.classList.add("active");
  } else if (offset > 30 && offset < 45) {
    dot1Desk.classList.remove("active");
    dot2Desk.classList.add("active");
    dot3Desk.classList.remove("active");
  }
}

document
  .querySelector(".slider-desk-next")
  .addEventListener("click", function () {
    offset += 59.5;
    if (offset > 97) {
      offset = -22.5;
    }
    sliderLine.style.right = offset + "%";
    desktopDots();
  });

document
  .querySelector(".slider-desk-prev")
  .addEventListener("click", function () {
    offset -= 59.5;
    if (offset < -22.5) {
      offset = 97;
    }
    sliderLine.style.right = offset + "%";
    desktopDots();
  });

const imagesMob = document.querySelectorAll(".slider-mob-img");
const sliderLineMob = document.querySelector(".slider-mob");
let offsetMob = 0;
let dot1Mob = document.querySelector(".mobile_dots .dot1");
let dot2Mob = document.querySelector(".mobile_dots .dot2");
let dot3Mob = document.querySelector(".mobile_dots .dot3");
dot1Mob.classList.add("active");

function mobileDots() {
  if (offsetMob == 0) {
    dot1Mob.classList.add("active");
    dot2Mob.classList.remove("active");
    dot3Mob.classList.remove("active");
  } else if (offsetMob == 100) {
    dot1Mob.classList.remove("active");
    dot2Mob.classList.add("active");
    dot3Mob.classList.remove("active");
  } else if (offsetMob == 200) {
    dot1Mob.classList.remove("active");
    dot2Mob.classList.remove("active");
    dot3Mob.classList.add("active");
  }
}

document
  .querySelector(".arrow-mob-next")
  .addEventListener("click", function () {
    offsetMob += 100;
    if (offsetMob > 200) {
      offsetMob = 0;
    }
    sliderLineMob.style.right = offsetMob + "%";
    mobileDots();
  });

document
  .querySelector(".arrow-mob-prev")
  .addEventListener("click", function () {
    offsetMob -= 100;
    if (offsetMob < 0) {
      offsetMob = 200;
    }
    sliderLineMob.style.right = offsetMob + "%";
    mobileDots();
  });
