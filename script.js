let profile = document.querySelector('.profile');

profile.addEventListener('mouseover', function () {
    profile.style.borderColor = '#FFB2B2 ';
    profile.style.transform = 'scale(1.03)';
});

profile.addEventListener('mouseout', function () {
    profile.style.borderColor = 'transparent';
    profile.style.transform = 'scale(1)';
});

const btn = document.querySelector('.btn');

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 2;
    const rotateY = (centerX - x) / 2;

    btn.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

btn.addEventListener('mouseleave', () => {
    btn.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

