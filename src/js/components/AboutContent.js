import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class AboutContent extends LitLightDom {
  static properties = {
    aboutTitle: { type: String },
    boldBlock: { type: String },
    firstBlock: { type: String },
    secondBlock: { type: String },
  };

  _isFirstBlock = true;

  render() {
    return html`
      <div class="message-wrapper">
        <h1 class="about-title fs-xl fw-black text-primary">${this.aboutTitle}</h1>
        <h2 class="first-block fs-6 fw-normal text-primary mb-2">
          <span class="fs-4 fw-black"> ${this.boldBlock} </span>
          ${this.renderBlock(this.firstBlock)}
        </h2>
        <h2 class="second-block fs-6 fw-normal text-primary mb-2">
          <span class="fs-4 fw-black"> ${this.boldBlock} </span>
          ${this.renderBlock(this.secondBlock)}
        </h2>
      </div>
    `;
  }

  renderBlock(block) {
    const aboutMessageSplitted = block.split(' ');
    let newAboutMessage = [];

    aboutMessageSplitted.map((char, index) => {
      newAboutMessage.push(`${char} `);
    });

    function breakLine(breakIndex) {
      newAboutMessage.splice(breakIndex, 0, html`<br />`);
    }

    if (this._isFirstBlock) {
      breakLine(3);
      breakLine(10);
      breakLine(15);

      this._isFirstBlock = false;
      return newAboutMessage;
    }

    breakLine(3);
    breakLine(9);
    breakLine(17);
    breakLine(20);

    return newAboutMessage;
  }
}

customElements.define('about-content', AboutContent);
