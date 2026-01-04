import { css, html, LitElement } from "lit";

export class MyTop extends LitElement {
  static get properties() {
    return {
      countries: { type: Array },
    };
  }

  static get defaultCountries() {
    return ["Perú", "USA", "España"];
  }

  constructor() {
    super();
    this.countries = MyTop.defaultCountries;
  }

  render() {
    return html`
      <div class="top">
        <div class="container-top">
          <p>Países destacados:</p>
          <p class="countries">
            ${this.countries.join(" - ")}
          </p>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .top {
        background-color: blueviolet;
        padding: 0.5rem 0;
      }

      p {
        margin: 0;
        font-weight: 500;
      }

      .countries {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .container-top {
        max-width: 1200px;
        margin: 0 auto;
        color: #fff;
        display: flex;
        justify-content: end;
        gap: 0.5rem;
      }
    `;
  }
}

window.customElements.define("my-top", MyTop);
