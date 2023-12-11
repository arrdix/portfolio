export const DisposableContent = {
  init() {
    this.initialListener();
  },

  initialListener() {
    const btnHome = document.querySelector('.btn-home');
    btnHome.addEventListener('click', () => {
      this._disposeElement(btnHome);

      const targetHref = btnHome.getAttribute('href');
      const targetContent = document.querySelector(`nav a[href="${targetHref}"]`);
      targetContent.classList.add('active');
    });

    document.querySelectorAll('nav a').forEach((navLink) => {
      navLink.addEventListener('click', () => {
        if (navLink.classList.contains('active')) return;

        this._disposeElement(navLink);
        navLink.classList.add('active');
      });
    });
  },

  _disposeElement(element) {
    this._activateDisposable();
    this._deactivateDisposable(element);
    this._removeActiveOnNavItem();
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

  _deactivateDisposable(navLink) {
    const targetId = navLink.getAttribute('href').substring(1);
    const targetContent = document.getElementById(targetId);

    setTimeout(() => {
      targetContent.classList.remove('d-none');
    }, 250);

    setTimeout(() => {
      targetContent.classList.remove('active');
    }, 300);
  },

  _removeActiveOnNavItem() {
    document.querySelectorAll('nav a').forEach((navLink) => {
      navLink.classList.remove('active');
    });
  },
};
