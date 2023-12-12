import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class HomeContent extends LitLightDom {
  static properties = {
    greetingTitle: { type: String },
    greetingMessage: { type: String },
  };

  render() {
    return html`
      <div class="greeting-wrapper">
        <h1 class="fs-xl fw-black text-primary lh-1">${this.greetingTitle}</h1>
        <h2 class="fs-4 fw-normal text-primary">${this.greetingMessage}</h2>
        <a
          href="#about"
          class="btn-home glass"
        >
          Peek Inside
        </a>
      </div>
    `;
  }
}

customElements.define('home-content', HomeContent);
