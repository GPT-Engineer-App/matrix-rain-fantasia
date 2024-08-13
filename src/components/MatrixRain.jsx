import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const matrixCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';

    const fontSize = 14;
    const columns = Math.min(Math.floor(canvas.width / fontSize), 1000); // Limit to a maximum of 1000 columns

    const drops = Array.from({ length: columns }, () => 0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < waves.length; i++) {
        const text = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
        }
      }
    };

    const interval = setInterval(draw, 50);

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default MagicalWaves;
