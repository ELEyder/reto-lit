import { LitElement, html, css } from "lit";
import { getCountries } from "../content/api/countries.api";
import { Star } from "lucide-static";

export class FavoriteList extends LitElement {
  static properties = {
    open: { type: Boolean },
    favorites: { type: Array },
    countries: { type: Array },
  };

  constructor() {
    super();
    this.open = false;
    this.favorites = [];
    this.countries = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    this.loadFavorites();
    this.countries = await getCountries();
    window.addEventListener("favorites-changed", this.onFavoritesChanged);
  }

  disconnectedCallback() {
    window.removeEventListener("favorites-changed", this.onFavoritesChanged);
  }

  onFavoritesChanged = () => {
    this.loadFavorites();
    this.requestUpdate();
  };

  loadFavorites() {
    const ids = JSON.parse(localStorage.getItem("favorites")) ?? [];
    this.favorites = ids;
  }

  toggleFavorites() {
    this.dispatchEvent(
      new CustomEvent("toggle-favorites", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const favoriteCountries = this.countries?.filter((country) =>
      this.favorites.includes(country.id)
    );
    return html`
      <div
        class="backdrop ${this.open ? "open" : ""}"
        @click=${this.toggleFavorites}
      ></div>

      <aside class="drawer ${this.open ? "open" : ""}">
        <header class="header">
          <h2>Favoritos</h2>
          <button @click=${this.toggleFavorites}>✕</button>
        </header>

        <div class="content">
          ${favoriteCountries?.length
            ? favoriteCountries.map(
                (country) =>
                  html`
                    <p class="row">
                      <span .innerHTML=${Star}></span> ${country.title}
                    </p>
                  `
              )
            : html`<p>No hay favoritos</p>`}
        </div>
      </aside>
    `;
  }

  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      pointer-events: none;
    }

    .backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .drawer {
      position: absolute;
      top: 0;
      right: 0;
      width: 360px;
      height: 100%;
      background: #fff;
      box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      pointer-events: auto;
      display: flex;
      flex-direction: column;
    }

    .drawer.open {
      transform: translateX(0);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      border-bottom: 1px solid #ddd;
    }

    .header button {
      border: none;
      background: none;
      font-size: 1.2rem;
      cursor: pointer;
    }

    .content {
      padding: 1rem 2rem;
      overflow-y: auto;
      flex: 1;
    }

    .row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `;
}

customElements.define("favorite-list", FavoriteList);
