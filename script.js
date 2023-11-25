function openInNewTab(url) {
    window.open(url, '_blank');
}
// JavaScript for smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// JavaScript for hiding/showing navbar on scroll
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let navbar = document.getElementById('navbar');

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-80px'; // Adjust as needed
    }

    prevScrollPos = currentScrollPos;
};
