const confetti = require('canvas-confetti').default;
export const initialCelebrate = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    console.log('start interval');
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      startVelocity: 30,
      spread: 200,
      ticks: 60,
      origin: {
        x: randomBetween(0.2, 0.8),
        y: randomBetween(0.2, 0.8)
      }
    });
    console.log('cycle');
  }, 400);
};

const randomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};
