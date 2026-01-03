import { LitElement, css, html } from "lit";

export class AppRoot extends LitElement {
  static get properties() {
    return {
      docsHint: { type: String },

      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.docsHint = "Click on the Vite and Lit logos to learn more";
    this.count = 0;
  }

  render() {
    return html`
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} class="button">
          count is ${this.count}
        </button>
        <button @click=${this._handleClick} class="confirm">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  _onClick() {
    this.count++;
  }

  _handleClick() {
    this.count--;
  }

  static get styles() {
    return css`
    .button {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      color: white;
      background-color: #0070f3;
    }

    .confirm {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      color: white;
      background-color: #ff0000;
    }
    `;
  }
}

window.customElements.define("app-root", AppRoot);
