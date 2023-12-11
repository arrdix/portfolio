export const DisposableContent = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', () => {
        this._activateDisposable();
        this._deactivateDisposable(link);
        this._removeActiveOnNavItem();
        link.classList.add('active');
      });
    });
  },

  _activateDisposable() {
    const contentWrapper = document.querySelector('.content-wrapper');
    const contentWrapperChildren = [...contentWrapper.children];
    const currentContent = contentWrapperChildren.find(
      (item) => !item.classList.contains('active')
    );

    contentWrapperChildren.forEach((child) => {
      child.classList.add('active');
    });

    setTimeout(() => {
      currentContent.classList.add('d-none');
    }, 300);
  },

  _deactivateDisposable(link) {
    const targetId = link.getAttribute('href').substring(1);
    const targetContent = document.getElementById(targetId);

    setTimeout(() => {
      targetContent.classList.remove('d-none');
    }, 250);

    setTimeout(() => {
      targetContent.classList.remove('active');
    }, 300);
  },

  _removeActiveOnNavItem() {
    document.querySelectorAll('nav a').forEach((link) => {
      link.classList.remove('active');
    });
  },
};
