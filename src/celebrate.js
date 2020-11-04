const confetti = require('canvas-confetti').default;
export const initialCelebrate = () => {
  const duration = 4 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    console.log('start interval');
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1,
      particleCount: 165,
      origin: {
        x: randomBetween(0.3, 0.7),
        y: randomBetween(0.35, 0.83)
      }
    });
    console.log('cycle');
  }, 310);
};

const randomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};
