document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your purchase!');
        });
    });
});
