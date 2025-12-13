document.addEventListener('DOMContentLoaded', () => {

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Fade in timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);

        // Custom simple reveal class logic
        item.addEventListener('transitionend', () => {
            if (item.classList.contains('visible')) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    });

    // Simple manual add for demo since we set style inline above
    window.addEventListener('scroll', () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    });
});
