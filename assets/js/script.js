function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu')
    const logos = document.getElementById('main-logo')

    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        logos.style.display = 'contents'
    } else {
        mobileMenu.classList.add('show');
        logos.style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-toggle').forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            const dropdown = item.querySelector('.dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    const hiddenText = document.querySelectorAll('.hidden')

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenText.forEach(text => {
        observer.observe(text);
    });

    const getCop = document.getElementById('year')
    const date = new Date().getFullYear()

    getCop.innerHTML = (date == 2024) ? date : `2024-${date}`
});