document.addEventListener('DOMContentLoaded', function() {
    const blogBtn = document.getElementById('blog-btn');
    const backBtn = document.getElementById('back-btn');

    if (blogBtn) {
        blogBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'https://nafx0.github.io/donation-bd-blog/';
        });
    }
});