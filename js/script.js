const animateHeading = document.querySelectorAll('.banner-heading span')

animateHeading.forEach((span, idx) => {
    const realIdx = idx + 1
    span.style.animationDelay = `${realIdx * 3}s`
})

const navbarButton = document.querySelector('.menu')
const navList = document.querySelector('.nav-list')
const navbar = document.querySelector('.navbar')

navbarButton.addEventListener('click', () => {
    navList.classList.toggle('visible')
    navbar.classList.toggle('expanded')
    navbarButton.classList.toggle('change')
})
// End of Menu

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
    if (video.paused) {
        video.play()
        video.style.opacity = '.7'
        btn.classList.replace('fa-play-circle', 'fa-pause-circle')
    } else {
        video.pause()
        video.style.opacity = '0.3'
        btn.classList.replace('fa-pause-circle', 'fa-play-circle')
    }
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    console.log(video.currentTime, video.duration);
    bar.style.width = `${scale(video.currentTime, 0, video.duration, 0, 100)}%`
    if (video.ended) {
        video.style.opacity = '0.3'
        btn.classList.replace('fa-pause-circle', 'fa-play-circle')
    }
})

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// End of Section 2 Video

// Smooth go to 

const navLinks = document.querySelectorAll('.nav-link')
const footerLinks = document.querySelectorAll('.footer-nav li')

navLinks.forEach(link => {
    const scroll = document.getElementById(`${link.textContent.toLowerCase()}`)
    link.addEventListener('click', () => {
        scrollSection(scroll)
    })
})

footerLinks.forEach(link => {
    const scroll = document.getElementById(`${link.textContent.toLowerCase()}`)
    link.addEventListener('click', () => {
        scrollSection(scroll)
    })
})

function scrollSection(id) {
    window.scrollTo({
        top: id.offsetTop,
        behavior: "smooth",
    })
    navList.classList.remove('visible')
    navbar.classList.remove('expanded')
    navbarButton.classList.remove('change')
}