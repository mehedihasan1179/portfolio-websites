// headbar toggle

let menuButton = document.getElementById("MenuBtn");

menuButton.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("toogle-btn-active");
  this.classList.toggle("fa-xmark");
});

// Typing Effect

let typed = new Typed(".auto-input", {
  strings: ["Front-End Developer!", "Freelancer!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// active link state on scroll

// get all links
let navLinks = document.querySelectorAll("nav ul li a");

// get all section
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});

// link to gamil to get meaaseges from users
// const form = document.querySelector("form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("msg");

// function sendMail() {
//   const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "mehedihasan.mh111769@gmail.com",
//     Password: "1E2AC7A30C82D8596CA6BD3A943071AE4430",
//     To: "mehedihasan.mh111769@gmail.com",
//     From: "mehedihasan.mh111769@gmail.com",
//     Subject: subject.value,
//     Body: bodyMessage,
//   }).then((message) => alert("Message sent successfully!"));
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   sendMail();
// });

// add emailJS to request message from users
function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("msg").value,
  };

  emailjs.send(
    "service_e1ivsul",
    "template_vukut9m",
    params
  ).then(alert("Message sent successfully!"), (error) => {
    alert("Message not sent. Please try again later.", error);
  });
}
