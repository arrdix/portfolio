import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class AppNavbar extends LitLightDom {
  static properties = {
    targets: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribute: (value) => value.join(','),
      },
    },
  };

  render() {
    const targets = [...this.targets];
    let targetElement = [];

    targets.map((target) => {
      const isHomeContent = target === 'home';
      const isProjectContent = target === 'project-1';
      targetElement.push(html`
        <a
          href="#${target}"
          class="text-primary fs-10 fw-light lh-1 ${isHomeContent ? 'active' : ''}"
          >${isProjectContent ? 'PROJECTS' : target.toUpperCase()}</a
        >
      `);
    });

    return html`${targetElement}`;
  }
}

customElements.define('app-navbar', AppNavbar);
