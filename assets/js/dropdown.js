// Delegate toggle logic after table content is updated
document.addEventListener('click', function (event) {
    const isActionButton = event.target.closest('.action-btn');
    const allDropdowns = document.querySelectorAll('.dropdown-container');

    // Hide all dropdowns
    allDropdowns.forEach(dropdown => dropdown.style.display = 'none');

    if (isActionButton) {
        const dropdown = isActionButton.parentElement.querySelector('.dropdown-container');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    }
});
