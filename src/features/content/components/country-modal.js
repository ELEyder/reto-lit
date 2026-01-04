import { css, html, LitElement } from "lit";

export class CountryModal extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean },
      title: { type: String },
      flagUrl: { type: String },
      capital: { type: String },
      population: { type: Number },
      region: { type: String },
      languages: { type: String },
      currencies: { type: String },
      favorite: { type: Boolean },
    };
  }
  constructor() {
    super();
  }

  render() {
    return this.open
      ? html`
          <div class="backdrop" @click=${this.closeModal}>
            <div class="modal" @click=${(e) => e.stopPropagation()}>
              <h2>${this.title}</h2>
              <img .src=${this.flagUrl} alt="${this.title}" />
              <div class="col">
                <div class="row">
                  <p class="title">Título:</p>
                  <p class="value">${this.title}</p>
                </div>
                <div class="row">
                  <p class="title">Capital:</p>
                  <p class="value">${this.capital}</p>
                </div>
                <div class="row">
                  <p class="title">Población:</p>
                  <p class="value">${this.population} habitantes</p>
                </div>
                <div class="row">
                  <p class="title">Región:</p>
                  <p class="value">${this.region}</p>
                </div>
                <div class="row">
                  <p class="title">Lenguajes:</p>
                  <p class="value">${this.languages}</p>
                </div>
                <div class="row">
                  <p class="title">Monedas Oficiales:</p>
                  <p class="value">${this.currencies}</p>
                </div>
              </div>

              <button class="close" @click=${this.closeModal}>Cerrar</button>
            </div>
          </div>
        `
      : null;
  }

  closeModal() {
    this.dispatchEvent(
      new CustomEvent("close-modal", {
        bubbles: true,
        composed: true,
      })
    );
  }

  static get styles() {
    return css`
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }

      .modal {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        width: 320px;
        max-width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .modal img {
        width: 100%;
        border-radius: 8px;
        aspect-ratio: 16/9;
      }

      .close {
        border-radius: 5px;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-weight: 500;
      }

      .close:hover {
        background-color: #b684e6;
        color: white;
      }

      p {
        margin: 0;
      }

      .title {
        font-weight: 500;
      }

      .value {
        text-align: end;
      }

      .col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .row {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        gap: 1rem;
      }
    `;
  }
}

window.customElements.define("country-modal", CountryModal);
