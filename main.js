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

  // header background toggle
  const header = document.getElementById('header-notch');
  const main = document.getElementById('main');
  window.addEventListener('scroll', function () {
    if (
      window.scrollY >
      main.getBoundingClientRect().top - header.offsetHeight
    ) {
      header.classList.add('bg-white');
      header.style.backgroundColor = 'white';
      header.classList.add('shadow-md');
    } else {
      header.style.backgroundColor = 'transparent';
      header.classList.remove('shadow-md');
    }
  });
};
