const loadingText = document.querySelector('.loading-percentage');
const loadingOverlay = document.querySelector('.loading-overlay');

const duration = 2000;
const delay = 10;
const startTime = Date.now();

const interval = setInterval(() => {
  const timePassed = Date.now() - startTime;

  const progress = Math.min(timePassed / duration, 1);

  loadingText.textContent = Math.floor(progress * 100);
  loadingOverlay.style.opacity = 1 - progress;

  if (progress === 1) {
    clearInterval(interval);
  }
}, delay);
