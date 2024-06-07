document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, article, .thumbnail');

    elements.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.boxShadow = '0 0 30px rgba(0, 191, 255, 1)';
        });
        el.addEventListener('mouseout', () => {
            el.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.5)';
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.backgroundColor = '#111';
            link.style.color = '#00BFFF';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.backgroundColor = 'transparent';
            link.style.color = '#00BFFF';
        });
    });

    // Efecto futurista de partículas
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);

        const size = Math.random() * 5 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;

        const animationDuration = Math.random() * 5 + 5;
        particle.style.animationDuration = `${animationDuration}s`;

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    };

    setInterval(createParticle, 100);
});
