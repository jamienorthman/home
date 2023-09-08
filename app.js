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