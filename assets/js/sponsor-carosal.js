// Pause autoplay on hover
const sponsorTrack = document.querySelector('.sponsor-track');
sponsorTrack.addEventListener('mouseenter', () => {
  sponsorTrack.style.animationPlayState = 'paused';
});
sponsorTrack.addEventListener('mouseleave', () => {
  sponsorTrack.style.animationPlayState = 'running';
});
