import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class ProjectItem extends LitLightDom {
  static properties = {
    id: { type: String },
    title: { type: String },
    imageLink: { type: String },
    liveLink: { type: String },
    codeLink: { type: String },
    description: { type: String },
    technologies: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribute: (value) => value.join(','),
      },
    },
  };

  render() {
    return html`
      <h1 class="projects-title fs-xl fw-black text-primary">${this.title}</h1>
      <a
        href="${this.generateNextLink()}"
        class="btn-next glass"
      >
        <i class="bi bi-arrow-down-short fs-3 text-primary lh-1"></i>
      </a>
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
    const projectId = parseInt(this.id.slice(-1), 10);
    let circleElement = [];

    for (let i = 1; i < 5; i++) {
      if (i === projectId) {
        circleElement.push(
          html`
            <a
              href=""
              class="lh-1"
            >
              <i class="bi bi-circle-fill fs-12 active"></i>
            </a>
          `
        );
      } else {
        circleElement.push(
          html`
            <a
              href=""
              class="lh-1"
            >
              <i class="bi bi-circle-fill fs-12"></i>
            </a>
          `
        );
      }
    }
    return circleElement;
  }

  generateNextLink() {
    const projectId = parseInt(this.id.slice(-1), 10);

    if (projectId === 5) return `#project-${projectId}`;
    return `#project-${projectId + 1}`;
  }
}

customElements.define('project-item', ProjectItem);