/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll section active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ==== remove toggle icon and navbar when navbar link is clicked====== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ====== Scroll Reveal =========*/

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ======= typed JS (multiple text) =======*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Software Engineer', 'Technical Writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const about = new Typed('.multiple-text1', {
    strings: ['Frontend Developer', 'Software Engineer', 'Technical Writer'],
    typeSpeed: 585,
    backSpeed: 0,
    backDelay: 100,
    loop: true
});

const test = new Typed('.multiple-text2', {
    strings: ["I create websites and applications using web languages such as: HTML, CSS and JavaScript, ensuring that users can easily interact with the sites and apps. ", "An engineer who applies engineering design process to design, develop, maintain, test, and evaluate computer software and solutions for clients and end users.", "I'm a professional writer who creates contents in the technology industry, and break down complex concepts and information in a digestible way."],
    typeSpeed: 59,
    backSpeed: 2,
    backDelay: 100,
    loop: true
});

/* ============= Dark light mode ====*/
let lightModeIcon = document.querySelector('#lightMode-icon');

lightModeIcon.onclick = () => {
    lightModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('light-mode');
};