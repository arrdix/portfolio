import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class AppHeader extends LitLightDom {
  static properties = {
    title: { type: String },
    subTitle: { type: String },
    resumeTitle: { type: String },
    idLink: { type: String },
    enLink: { type: String },
  };

  render() {
    return html`
      <p class="header-title fs-6 fw-medium text-primary disposable">${this.title}</p>
      <div class="resume-wrapper disposable active">
        <p class="resume-title fs-6 fw-medium text-primary lh-1">${this.resumeTitle}</p>
        <div class="download-wrapper">
          <a
            href="${this.idLink}"
            class="text-decoration-none fs-10 fw-light"
            >Indonesia (ID)</a
          >
          <p class="fs-12 text-primary">|</p>
          <a
            href="${this.enLink}"
            class="text-decoration-none fs-10 fw-light"
            >English (EN)</a
          >
        </div>
      </div>
      <button
        type="button"
        class="btn-resume"
      >
        <p class="fs-6 fw-medium text-primary">${this.subTitle}</p>
        <i class="bi bi-list fs-5 text-primary"></i>
      </button>
    `;
  }
}

customElements.define('app-header', AppHeader);
