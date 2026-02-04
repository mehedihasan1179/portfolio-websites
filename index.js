// // Dark Mode Toggle
// const themeToggle = document.getElementById("themeToggle");
// const themeIcon = document.getElementById("themeIcon");
// const html = document.documentElement;

// function setTheme(theme) {
//   html.setAttribute("data-theme", theme);
//   localStorage.setItem("theme", theme);
//   themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
// }

// function initTheme() {
//   const savedTheme =
//     localStorage.getItem("theme") ||
//     (window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light");
//   setTheme(savedTheme);
// }

// themeToggle.addEventListener("click", () => {
//   const currentTheme = html.getAttribute("data-theme") || "light";
//   setTheme(currentTheme === "dark" ? "light" : "dark");
// });

// // Load theme on page load
// initTheme();

// Dark Mode Toggle (Manual only - no system preference)

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Update icon: Sun for light mode, Moon for dark mode
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Initialize theme: Use saved preference, otherwise default to LIGHT
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Always default to light
    setTheme(savedTheme);
}

// Toggle between dark and light on click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Load the theme when page loads
initTheme();

// Add this script to your HTML or JS file
document.addEventListener('DOMContentLoaded', function() {
  const homeSection = document.getElementById('home');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.7; // Adjust this value for speed
    homeSection.style.backgroundPosition = `center ${rate}px`;
  });
});

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


// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-inner-line');

const fillSkillBars = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
      observer.unobserve(bar); // Animate only once
    }
  });
};

const skillObserver = new IntersectionObserver(fillSkillBars, {
  threshold: 0.5,        // Trigger when 50% of section is visible
  rootMargin: '0px 0px -100px 0px' // Start a bit early
});

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});



// Preview Modal Functionality
// Live Preview Modal Functionality
const modal = document.getElementById('preview-modal');
const iframe = document.getElementById('preview-iframe');
const closeBtn = document.querySelector('.close');
const previewBtns = document.querySelectorAll('.live-preview');

previewBtns.forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        iframe.src = url;
        modal.style.display = 'block';
    });
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = ''; // Clear iframe
});

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
    }
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

  emailjs
    .send("service_e1ivsul", "template_vukut9m", params)
    .then(alert("Message sent successfully!"), (error) => {
      alert("Message not sent. Please try again later.", error);
    });
}
