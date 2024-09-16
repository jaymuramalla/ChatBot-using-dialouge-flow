document.addEventListener('DOMContentLoaded', function() {
    console.log("Website Loaded Successfully!");

    // Add any interactivity you need here

    const toggle = document.getElementById('toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        toggle.checked = true;
        body.classList.add('dark-mode');
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
