import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class ContactContent extends LitLightDom {
  static properties = {
    title: { type: String },
    fullTitle: { type: String },
    formTitle: { type: String },
    socialsTitle: { type: String },
    socialItems: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribute: (value) => value.join(','),
      },
    },
    socialLinks: {
      type: String,
      converter: {
        fromAttribute: (value) => value.split(','),
        toAttribute: (value) => value.join(','),
      },
    },
  };

  render() {
    return html`
      <h1 class="contact-title fs-xl fw-black text-primary">${this.title}</h1>
      <h2 class="form-title fs-6 fw-normal text-primary d-block d-lg-none">${this.fullTitle}</h2>
      <h2 class="form-title fs-6 fw-normal text-primary d-none d-lg-block">${this.formTitle}</h2>
      <form
        action=""
        class="form-wrapper"
      >
        <input
          type="text"
          class="fs-10 fw-light text-primary"
          placeholder="Email"
          name="email"
        />
        <textarea
          class="fs-10 fw-light text-primary"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          type="submit"
          class="fs-10 fw-light text-primary"
        >
          Send
        </button>
      </form>
      <h2 class="socials-title fs-6 fw-normal text-primary d-none d-lg-block">
        ${this.socialsTitle}
      </h2>
      <div class="socials-wrapper">${this.renderSocialItems()}</div>
      <footer class="footer-text fs-10 fw-normal text-primary">
        Made with ❤ by
        <a
          href="https://www.linkedin.com/in/yudistiraardi/"
          class="text-decoration-none"
        >
          Yudistira Ardi.
        </a>
        Powered by
        <a
          href="https://getbootstrap.com/"
          class="text-decoration-none"
        >
          <i class="bi bi-bootstrap"></i>
          Bootstrap
        </a>
        and
        <a
          href="https://lit.dev/"
          class="lit-link text-decoration-none"
        >
          <img
            src="img/LitElement.png"
            class="lit-logo"
            alt=""
          />
          LitElement.
        </a>
      </footer>
    `;
  }

  renderSocialItems() {
    const socialLinks = [...this.socialLinks];
    let index = 0;

    return this.socialItems.map((item) => {
      let currentItemLink = socialLinks[index];
      index++;
      return html`
        <a href="${currentItemLink}">
          <i class="bi bi-${item.toLowerCase()} fs-5 text-primary"></i>
          <p class="fs-10 fw-light text-primary">${item}</p>
        </a>
      `;
    });
  }
}

customElements.define('contact-content', ContactContent);
