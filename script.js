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