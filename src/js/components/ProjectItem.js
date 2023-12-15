import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class ProjectItem extends LitLightDom {
  static properties = {
    id: { type: String },
    title: { type: String },
    imageLink: { type: String },
    liveLink: { type: String },
    liveStatus: { type: String },
    codeLink: { type: String },
    description: { type: String },
    technologies: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribute: (value) => value.join(','),
      },
    },
    totalItems: { type: String },
  };

  render() {
    this.totalItems = 5;

    return html`
      <h1 class="projects-title fs-xl fw-black text-primary">${this.title}</h1>
      <a
        href="${this.generateNextLink()}"
        class="btn-next glass ${parseInt(this.id.slice(-1), 10) === this.totalItems
          ? 'd-none'
          : 'd-block'}"
      >
        <i class="bi bi-arrow-down-short fs-3 text-primary lh-1 d-block d-lg-none"></i>
        <i class="bi bi-arrow-right-short fs-3 text-primary lh-1 d-none d-lg-block"></i>
      </a>
      <div class="circle-wrapper">${this.renderCircles()}</div>
      <img
        src="${this.imageLink}"
        class="projects-preview positon-relative rounded-4 object-fit-cover"
        alt="project-image"
      />
      <div class="projects-detail">
        <div class="projects-actions">
          <a
            href="${this.liveLink}"
            data-bs-toggle="tooltip"
            data-bs-title="${this.liveStatus === 'not-live'
              ? 'Due to free plan used in 3rd party News API, unable to show live preview'
              : 'Live Preview'}"
          >
            <i
              class="bi bi-laptop fs-5 ${this.liveStatus === 'not-live'
                ? 'text-warning'
                : 'text-primary'}"
            ></i>
          </a>
          <a
            href="${this.codeLink}"
            data-bs-toggle="tooltip"
            data-bs-title="Github"
          >
            <i class="bi bi-github fs-5 text-primary"></i>
          </a>
        </div>
        <p class="detail-text fs-8 fw-light text-primary">${this.description}</p>
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
          class="used-technologies rounded-1 object-fit-cover"
          alt="${tech}"
          data-bs-toggle="tooltip"
          data-bs-title="${tech}"
        />`
    );
  }

  renderCircles() {
    const projectId = parseInt(this.id.slice(-1), 10);
    let circleElement = [];

    for (let i = 1; i <= this.totalItems; i++) {
      if (i === projectId) {
        circleElement.push(
          html`
            <a
              href="#project-${i}"
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
              href="#project-${i}"
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
