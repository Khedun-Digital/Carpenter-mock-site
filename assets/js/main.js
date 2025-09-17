document.addEventListener('DOMContentLoaded', function() {
    if (window.AOS && typeof AOS.init === 'function') {
        AOS.init();
    }
    if (window.feather && typeof feather.replace === 'function') {
        feather.replace();
    }

    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    var accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders && accordionHeaders.length) {
        accordionHeaders.forEach(function(button) {
            button.addEventListener('click', function() {
                var accordionItem = button.closest('.accordion-item');
                if (accordionItem) {
                    accordionItem.classList.toggle('active');
                }
            });
        });
    }
});


