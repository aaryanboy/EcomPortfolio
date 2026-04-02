document.addEventListener('DOMContentLoaded', () => {
    // Update footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll reveal/animation logic can be added here if needed
    // Example: Add a class to elements when they scroll into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // If you want to use the observer, add simple initial styles to your sections
    // const sections = document.querySelectorAll('.section');
    // sections.forEach(section => {
    //     section.style.opacity = '0';
    //     section.style.transform = 'translateY(20px)';
    //     section.style.transition = 'all 0.8s ease-out';
    //     observer.observe(section);
    // });
});
