// click menu a-tag to close toggler
document.querySelectorAll(".dp_nav_items ol a").forEach(item => {
    item.addEventListener('click', () => {
        const toggler = document.querySelector('#toggler');
        toggler.checked = false;
    });
});