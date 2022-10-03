// selectors

const select = document.querySelectorAll('.select');

for (var i = 0; i < select.length; i++) {
    select[i].addEventListener('click', function () {
        // remove active class for all elements
        for (var i = 0; i < select.length; i++) {
            select[i].classList.remove('active');
        }
        // add active to clicked element
        this.classList.add('active');
    });
}

// carousel

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        items: 3,
        dots: false,
    });
});