window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#contents a');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`div li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`div li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('img[id]').forEach((img) => {
        observer.observe(img);
    }); 
});