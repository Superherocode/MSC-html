document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.innerHTML = menu.classList.contains('active')
            ? '<i class="bi bi-x"></i>'
            : '<i class="bi bi-list"></i>';
    });

    // Active menu item khi scroll tới section
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    function setActiveMenu() {
        const scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150; // trừ header (tuỳ chỉnh)
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveMenu);
});

window.addEventListener('scroll', function() {
    const logoImg = document.querySelector('.logo img');
    if (window.scrollY > 50) {
      logoImg.style.height = '50px';
    } else {
      logoImg.style.height = '70px'; // Chiều cao ban đầu
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mobile-toggle");
    const close = document.getElementById("mobile-close");
    const mobileMenu = document.getElementById("nav-mobile-menu");
    const overlay = document.getElementById("mobile-overlay");

    function openMenu() {
      mobileMenu.classList.add("active");
      overlay.classList.add("active");
    }

    function closeMenu() {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    }

    toggle.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu); // click nền mờ để đóng menu
  });
  