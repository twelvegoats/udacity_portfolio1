document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const scrollThreshold = 50; // Adjust this value to change when the header shrinks

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});
