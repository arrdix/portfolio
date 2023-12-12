import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class AboutContent extends LitLightDom {
  static properties = {
    aboutTitle: { type: String },
    aboutMessage: { type: String },
  };

  render() {
    return html`
      <div class="message-wrapper">
        <h1 class="fs-xl fw-black text-primary">${this.aboutTitle}</h1>
        <h2 class="fs-6 fw-normal text-primary">${this.renderAboutMessage()}</h2>
      </div>
    `;
  }

  renderAboutMessage() {
    const aboutMessageSplitted = this.aboutMessage.split(' ');
    let newAboutMessage = [];

    aboutMessageSplitted.map((char, index) => {
      newAboutMessage.push(`${char} `);
    });

    breakLine(3);
    breakLine(9);
    breakLine(13);

    function breakLine(breakIndex) {
      newAboutMessage.splice(breakIndex, 0, html`<br />`);
    }

    return newAboutMessage;
  }
}

customElements.define('about-content', AboutContent);
