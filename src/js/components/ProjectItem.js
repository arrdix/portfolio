import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class ProjectItem extends LitLightDom {
  static properties = {
    id: { type: String, reflect: true },
    title: { type: String, reflect: true },
    imageLink: { type: String, reflect: true },
    liveLink: { type: String, reflect: true },
    codeLink: { type: String, reflect: true },
    description: { type: String, reflect: true },
    technologies: {
      type: String,
      reflect: true,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribute: (value) => value.join(','),
      },
    },
  };

  render() {
    return html`
      <h1 class="projects-title fs-xl fw-black text-primary">${this.title}</h1>
      <div class="circle-wrapper">${this.renderCircles()}</div>
      <img
        src="${this.imageLink}"
        class="projects-preview positon-relative rounded-4 object-fit-cover"
        alt="project-image"
      />
      <div class="projects-detail">
        <div class="projects-actions">
          <a href="${this.liveLink}">
            <i class="bi bi-laptop fs-5 text-primary"></i>
          </a>
          <a href="${this.codeLink}">
            <i class="bi bi-github fs-5 text-primary"></i>
          </a>
        </div>
        <p class="detail-text fs-10 fw-light text-primary">${this.description}</p>
      </div>
      <div class="projects-tech">
        <h3 class="tech-title fs-6 fw-bold text-primary">TECHNOLOGIES</h3>
        <div class="tech-wrapper">${this.renderTechnologies()}</div>
      </div>
    `;
  }

  renderTechnologies() {
    return this.technologies.map(
      (tech) =>
        html`<img
          src="img/${tech}.png"
          class="w-100 rounded-3 object-fit-cover"
          alt="${tech}"
        />`
    );
  }

  renderCircles() {
    const projectId = this.id.slice(-1);
    let circleElement = [];

    for (let i = 1; i < 5; i++) {
      if (i == projectId) {
        circleElement.push(html`<i class="bi bi-circle-fill fs-12 active"></i>`);
      } else {
        circleElement.push(html`<i class="bi bi-circle-fill fs-12"></i>`);
      }
    }
    return circleElement;
  }
}

customElements.define('project-item', ProjectItem);
