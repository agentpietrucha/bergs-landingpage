window.onload = function () {
  const heroSrc = document.getElementById('hero-src');
  const heroVideo = document.getElementById('hero-video');
  if (window.innerWidth > 768) {
    heroSrc.src = 'BERGS_poziom.mp4';
  } else {
    heroSrc.src = 'BERGSpion.mp4';
  }
  document.getElementById('video-placeholder').classList.add('hidden');
  heroVideo.classList.remove('hidden');
  heroVideo.load();
};
