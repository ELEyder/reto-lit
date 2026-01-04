import { css, html, LitElement } from "lit";
import { getCountries } from "./api/countries.api.js";
import "./components/country-card";

export class MyContent extends LitElement {
  static properties = {
    countries: { type: Array },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.countries = [];
    this.loading = true;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.countries = await getCountries();
    this.loading = false;
  }

  render() {
    return html`
      <div class="content">
        <div class="container">
          <h1>Lista de Países</h1>
          <div class="list">
            ${this.loading ? html`<p>Cargando...</p>` : null}
            ${this.countries.map((country) => {
              return html`<country-card
                id=${country.id}
                .title=${country.title}
                .flagUrl=${country.flagUrl}
                .capital=${country.capital}
                .population=${country.population}
                .region=${country.region}
                .languages=${country.languages}
                .currencies=${country.currencies}
                .favorite=${country.favorite}
              ></country-card>`;
            })}
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .content {
        background-color: white;
      }

      .container {
        width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: column;
      }

      .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, auto);
        gap: 16px;
        padding: 16px;
      }
    `;
  }
}

window.customElements.define("my-content", MyContent);
