document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('#dropdown-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    const pageMap = {
        'index.html': 'home-link',
        'services.html': 'services-link',
        'about_me.html': 'about-me-link',
    }

    let activeLinkId;

    if (page === '' || page === 'index.html') {
        activeLinkId = 'home-link';
    } else {
        activeLinkId = pageMap[page];
    }
    if (activeLinkId) {
        const activeLink = document.getElementById(activeLinkId);
        if (activeLink) activeLink.classList.add('active');
    }
});
