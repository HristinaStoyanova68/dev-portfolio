document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.querySelector('.show-more');
    const textHide = document.querySelector('.text-hide');

    showMoreButton.addEventListener('click', function () {
        if (textHide.classList.contains('show')) {
            textHide.classList.remove('show');
            showMoreButton.textContent = 'Show More';
        } else {
            textHide.classList.add('show');
            showMoreButton.textContent = 'Show Less';
        }
    });
});
