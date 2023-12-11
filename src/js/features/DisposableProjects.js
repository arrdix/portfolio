export const DisposableProjects = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document.querySelectorAll('.btn-next').forEach((btn) => {
      btn.addEventListener('click', () => {
        this._activateDisposable();
        this._deactivateDisposable(btn);
      });
    });

    document.querySelectorAll('.circle-wrapper a').forEach((circleLink) => {
      circleLink.addEventListener('click', () => {
        let isCurrentProject;
        const linkIcons = [...circleLink.children];
        linkIcons.forEach((linkIcon) => {
          if (linkIcon.classList.contains('active')) isCurrentProject = true;
        });

        if (isCurrentProject) return;

        this._activateDisposable();
        this._deactivateDisposable(circleLink);
      });
    });
  },

  _activateDisposable() {
    const projectWrappers = document.querySelectorAll('.projects-wrapper');
    const projectWrapperArray = [...projectWrappers];
    const currentProject = projectWrapperArray.find((item) => !item.classList.contains('active'));

    projectWrappers.forEach((projectWrapper) => {
      projectWrapper.classList.add('active');
    });

    setTimeout(() => {
      currentProject.classList.add('d-none');
    }, 300);
  },

  _deactivateDisposable(element) {
    const targetId = element.getAttribute('href').substring(1);
    const targetProject = document.getElementById(targetId);

    setTimeout(() => {
      targetProject.classList.remove('d-none');
    }, 250);

    setTimeout(() => {
      targetProject.classList.remove('active');
    }, 300);
  },
};
