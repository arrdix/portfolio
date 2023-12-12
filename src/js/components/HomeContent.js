import { LitLightDom } from './base/LitLightDom';
import { html } from 'lit';

export class HomeContent extends LitLightDom {
  static properties = {
    greetingTitle: { type: String },
    firstType: { type: String },
    secondType: { type: String },
    newGreetingMessage: { type: String, reflect: true },
  };

  _isAnimated = false;

  render() {
    this.typingAnimation();
    return html`
      <div class="greeting-wrapper">
        <h1 class="greeting-title fs-xl fw-black text-primary lh-1">${this.greetingTitle}</h1>
        <h2 class="greeting-message fs-4 fw-normal text-primary">
          ${this.newGreetingMessage}<span class="fs-3 fw-normal text-primary blinking">|</span>
        </h2>
        <a
          href="#about"
          class="btn-home glass"
        >
          Peek Inside
        </a>
      </div>
    `;
  }

  typingAnimation() {
    if (this._isAnimated) return;

    const homeContent = document.getElementById('home');
    const firstType = [...this.firstType];
    const secondType = [...this.secondType];
    let toRender = '';
    let index = 0;

    function animateFirstType(firstType) {
      return function () {
        const stopper = firstType.length;
        if (toRender.length >= stopper) {
          return;
        }

        toRender += firstType[index];
        homeContent.setAttribute('newGreetingMessage', toRender);
        index++;
      };
    }

    function animateSecondType(firstType, secondType) {
      return function () {
        const stopper = firstType.length + secondType.length;
        if (toRender.length === stopper) {
          index = 0;
          return;
        }

        toRender += secondType[index];
        homeContent.setAttribute('newGreetingMessage', toRender);
        index++;
      };
    }

    setTimeout(() => {
      setInterval(animateFirstType(firstType), 250);
    }, 1000);

    setTimeout(() => {
      index = 0;
      setInterval(animateSecondType(firstType, secondType), 150);
    }, 5000);

    this._isAnimated = true;
  }
}

customElements.define('home-content', HomeContent);
