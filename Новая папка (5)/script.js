document.addEventListener('DOMContentLoaded', () => {
const cake = document.querySelector('.cake-float');

document.addEventListener('mousemove', e => {
    const x = (e.clientX - window.innerWidth / 2) / 10; 
    const y = (e.clientY - window.innerHeight / 2) / 10; 
    cake.style.transform = `translateY(${Math.sin(Date.now()/500)*20}px) rotateY(${x}deg) rotateX(${y}deg)`;
});
    const images = document.querySelectorAll('.image-block');
    if (images.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            images.forEach((img, i) => {
                img.style.transform = `rotate(${scrollY/10 + i*10}deg)`;
            });
        });
    }
});