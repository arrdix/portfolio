import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class AboutContent extends LitLightDom {
  static properties = {
    aboutTitle: { type: String },
    messageTitle: { type: String },
    firstBlock: { type: String },
    secondBlock: { type: String },
  };

  _isFirstBlock = true;

  render() {
    return html`
      <div class="message-wrapper">
        <h1 class="about-title fs-xl fw-black text-primary">${this.aboutTitle}</h1>
        <div class="profile-pic-wrapper object-fit-cover rounded-4">
          <img
            src="img/profile-pic.png"
            alt=""
            class="profile-pic object-fit-contain rounded-4"
          />
        </div>
        <h2 class="message-title fs-4 fw-bold text-primary text-primary">${this.messageTitle}</h2>
        <h3 class="first-block fs-6 fw-normal text-primary mb-1">
          ${this.renderBlock(this.firstBlock)}
        </h3>
        <h3 class="second-block fs-6 fw-normal text-primary">
          ${this.renderBlock(this.secondBlock)}
        </h3>
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
      breakLine(5);
      breakLine(11);
      breakLine(16);

      this._isFirstBlock = false;
      return newAboutMessage;
    }

    breakLine(6);
    breakLine(10);
    breakLine(17);
    breakLine(23);

    return newAboutMessage;
  }
}

customElements.define('about-content', AboutContent);
