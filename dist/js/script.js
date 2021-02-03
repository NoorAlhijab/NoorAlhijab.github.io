const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const scrollToUp = document.querySelector('.scroll-up');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// Scroll Back  to top
// When the user scrolls down 150px from the top of the document, show the button
const handleScroll = () => {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    scrollToUp.style.display = 'block';
  } else {
    scrollToUp.style.display = 'none';
  }
};
document.addEventListener('scroll', handleScroll);

scrollToUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
