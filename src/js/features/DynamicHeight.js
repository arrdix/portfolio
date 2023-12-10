export const DynamicHeight = {
  init() {
    this._adjustSize();
    this._onWindowResize();
  },

  _adjustSize() {
    const contentWrapper = document.querySelector('.content-wrapper');
    const contentWrapperChildren = [...contentWrapper.children];
    contentWrapperChildren.forEach((child) => {
      child.style.height = `${contentWrapper.clientHeight}px`;
    });
  },

  _onWindowResize() {
    window.addEventListener('resize', this._adjustSize);
  },
};
