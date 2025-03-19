// Button Click Animation
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.animation = 'bounce 0.3s ease';
    });
});