document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.section h2');

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show');
        });
    });

    const images = document.querySelectorAll('.gallery img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
});
