const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', navigateToSection)

function navigateToSection() {
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight) {
                document.querySelector('nav a[href*=' +
                sectionId + ']').classList.add('active')
            } else {
                document.querySelector('nav a[href*=' +
                sectionId + ']').classList.remove('active')
            }
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.add('hidden')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', interactNav);

function interactNav() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}