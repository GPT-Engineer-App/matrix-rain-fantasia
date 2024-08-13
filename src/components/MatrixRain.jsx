import React, { useEffect, useRef } from 'react';

const MagicalWaves = () => {
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

    const magicalSymbols = '✦✧★☆✯✡︎⚝⚹✵✶✷✸✹✺✻✼❂☸︎❉❋';

    const fontSize = 20;
    const columns = Math.min(Math.floor(canvas.width / fontSize), 1000); // Limit to a maximum of 1000 columns

    const waves = Array.from({ length: columns }, () => 0);

    const draw = () => {
      ctx.fillStyle = 'rgba(25, 25, 112, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FFD700';
      ctx.font = `${fontSize}px fantasy`;

      for (let i = 0; i < waves.length; i++) {
        const symbol = magicalSymbols[Math.floor(Math.random() * magicalSymbols.length)];
        const x = i * fontSize;
        const y = waves[i] * fontSize;

        ctx.fillText(symbol, x, y);

        waves[i] += 0.05;
        if (y > canvas.height && Math.random() > 0.99) {
          waves[i] = 0;
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
