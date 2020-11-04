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
      startVelocity: 60,
      spread: 100,
      ticks: 60,
      origin: {
        x: randomBetween(0.3, 0.7),
        y: randomBetween(0.45, 0.9)
      }
    });
    console.log('cycle');
  }, 350);
};

const randomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};
