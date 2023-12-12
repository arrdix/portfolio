import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class SkillsContent extends LitLightDom {
  static properties = {
    title: { type: String },
    favoriteTitle: { type: String },
    favoriteItems: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribue: (value) => value.join(','),
      },
    },
    techTitle: { type: String },
    techItems: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribue: (value) => value.join(','),
      },
    },
    skillsMessage: { type: String },
    skillsMessageBold: { type: String },
  };

  render() {
    return html`
      <h1 class="skills-title fs-xl fw-black text-primary">${this.title}</h1>
      <h2 class="favorites-title fs-6 fw-normal text-primary">${this.favoriteTitle}</h2>
      <div class="favorites-wrapper">${this.renderFavoriteItems()}</div>
      <h2 class="technologies-title fs-6 fw-normal text-primary">${this.techTitle}</h2>
      <div class="technologies-wrapper">${this.renderTechItems()}</div>
      <p class="skills-message fs-6 fw-normal text-primary">
        ${this.skillsMessage}<span class="fw-medium">${this.skillsMessageBold}</span>
      </p>
    `;
  }

  renderFavoriteItems() {
    return this.favoriteItems.map((item) => {
      return html`
        <div class="favorite-item">
          <img
            src="img/${item}.png"
            class="rounded-3 object-fit-cover"
            alt=""
          />
          <p class="fs-8 fw-medium text-primary d-none d-lg-block">${item}</p>
        </div>
      `;
    });
  }

  renderTechItems() {
    return this.techItems.map((item) => {
      return html`
        <div class="technologies-item">
          <img
            src="img/${item}.png"
            class="rounded-3 object-fit-cover"
            alt=""
          />
          <p class="fs-9 fw-medium text-primary d-none d-lg-block">${item}</p>
        </div>
      `;
    });
  }
}

customElements.define('skills-content', SkillsContent);
