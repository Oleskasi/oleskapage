
//анимка
document.addEventListener("DOMContentLoaded", function() {
    const interestsItems = document.querySelectorAll('.interests li');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        interestsItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom >= 0) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});





//менющка

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = this;

    navLinks.classList.toggle('active'); 
    hamburger.classList.toggle('active'); 
});
