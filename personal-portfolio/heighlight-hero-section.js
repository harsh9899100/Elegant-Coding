        const highlightSection = document.querySelector('.highlight-section');

        function createRandomParticle(x, y, color) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.background = color;
            highlightSection.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 3000);
        }

        highlightSection.addEventListener('mousemove', (e) => {
            const cursorHighlight = document.createElement('div');
            cursorHighlight.className = 'cursor-highlight';

            const x = e.clientX;
            const y = e.clientY;

            cursorHighlight.style.left = `${x}px`;
            cursorHighlight.style.top = `${y}px`;

            highlightSection.appendChild(cursorHighlight);

            setTimeout(() => {
                cursorHighlight.style.transform = 'scale(2)';
                cursorHighlight.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                cursorHighlight.remove();
            }, 600);

            const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            createRandomParticle(x, y, randomColor);
        });

        setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            createRandomParticle(x, y, randomColor);
        }, 500);
        