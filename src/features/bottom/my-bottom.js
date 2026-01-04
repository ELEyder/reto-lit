import { css, html, LitElement } from "lit";

export class MyBottom extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="bottom">
        <div class="links">
          <a href="#">Política de calidad y ambiental</a>
          <a href="#">Política de cumplimiento penal</a>
          <a href="#">Codigo de ética</a>
          <a href="#">Canal de denuncias</a>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
    .bottom {
      background-color: #2b2b2b;
      padding: 1rem;
    }

    .links {
      max-width: 1200px;
      width: 100%;
      display: flex;
      justify-content: end;
      gap: 2rem;
      margin: 0 auto;
    }

    a {
      color: white;
      text-decoration: none;
    }

    `;
  }
}

window.customElements.define("my-bottom", MyBottom);
