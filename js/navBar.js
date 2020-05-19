var nav = document.querySelector('#main_menu');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY >= 100) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        nav.style.transition = 'background-color 0.3s ease';
    }
    if (window.scrollY < 100) {
      nav.style.backgroundColor = 'transparent';
    }
});
