export const SmoothScroll = {
  init() {
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        this._removeActive();
        this._smoothScroll(link);
      });
    });
  },

  _smoothScroll(link) {
    link.classList.add('active');
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  },

  _removeActive() {
    document.querySelectorAll('nav a').forEach((link) => {
      link.classList.remove('active');
    });
  },
};
