import { css, html, LitElement } from "lit";
import { Star } from "lucide-static";
import "./country-modal";

export class CountryCard extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      title: { type: String },
      flagUrl: { type: String },
      capital: { type: String },
      population: { type: Number },
      region: { type: String },
      languages: { type: String },
      currencies: { type: String },
      favorite: { type: Boolean },
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.open = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.favorite = this.isFavorite();
  }

  isFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    return favorites.includes(this.id);
  }

  toggleFavorite() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

    if (favorites.includes(this.id)) {
      favorites = favorites.filter((f) => f !== this.id);
      this.favorite = false;
    } else {
      favorites.push(this.id);
      this.favorite = true;
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    window.dispatchEvent(new CustomEvent("favorites-changed"));
  }

  render() {
    return html`
      <div class="card">
        <img class="flag" .src=${this.flagUrl} alt="${this.title}" />
        <p class="title" @click=${this.openModal}>${this.title}</p>
        <button
          class="button"
          @click=${this.toggleFavorite}
          title="Marcar como favorito"
        >
          <span
            class="favorite ${this.favorite ? "active" : ""}"
            .innerHTML=${Star}
          ></span>
        </button>
      </div>
      <country-modal
        ?open=${this.open}
        .id=${this.id}
        .title=${this.title}
        .flagUrl=${this.flagUrl}
        .capital=${this.capital}
        .population=${this.population}
        .region=${this.region}
        .languages=${this.languages}
        .currencies=${this.currencies}
        .favorite=${this.favorite}
        @toggle-favorite=${this.toggleFavorite}
        @close-modal=${() => (this.open = false)}
      ></country-modal>
    `;
  }

  openModal() {
    this.open = true;
  }

  static get styles() {
    return css`
      .card {
        background-color: #eeeeee;
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 80px;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s ease;
      }

      .card:hover {
        box-shadow: 2px 2px 10px #02020236;
      }

      .title {
        width: 100%;
        cursor: pointer;
      }

      .title:hover {
        color: blueviolet;
      }

      .flag {
        height: 100%;
        aspect-ratio: 16/9;
      }

      .button {
        height: 100%;
        border: none;
        cursor: pointer;
        background-color: transparent;
      }

      .favorite {
        padding: 1rem;
      }

      .active svg {
        fill: #b684e6;
      }
    `;
  }
}

window.customElements.define("country-card", CountryCard);
