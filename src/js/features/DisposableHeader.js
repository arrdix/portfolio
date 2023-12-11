export const DisposableHeader = {
  init() {
    this.initialListener();
  },

  initialListener() {
    const headerTitle = document.querySelector('.header-title');
    const resumeWrapper = document.querySelector('.resume-wrapper');
    const btnResume = document.querySelector('.btn-resume');

    btnResume.addEventListener('click', () => {
      btnResume.classList.contains('active')
        ? this._deactivateDisposable(headerTitle)
        : this._activateDisposable(headerTitle);

      resumeWrapper.classList.toggle('active');
      btnResume.classList.toggle('active');
    });

    document.querySelectorAll('.download-wrapper a').forEach((downloadLink) => {
      downloadLink.addEventListener('click', () => {
        btnResume.click();
      });
    });
  },

  _activateDisposable(element) {
    element.classList.add('active');

    setTimeout(() => {
      element.classList.add('d-none');
    }, 300);
  },

  _deactivateDisposable(element) {
    setTimeout(() => {
      element.classList.remove('d-none');
    }, 250);

    setTimeout(() => {
      element.classList.remove('active');
    }, 300);
  },
};
