import { css, html, LitElement } from "lit";
import { Star } from "lucide-static";
import { Home } from "lucide-static";

export class MyHeader extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <div class="container-header">
          <a href="/">
            <img class="logo" src="./logo.svg" alt="Vite logo" />
          </a>
          <ul>
            <li>
              <a href="/">
                <span class="icon" .innerHTML=${Home}></span>Inicio</a
              >
            </li>
            <li>
              <a href="/favorites">
                <span class="icon" .innerHTML=${Star}></span>Favoritos</a
              >
            </li>
          </ul>
        </div>
      </header>
    `;
  }

  static get styles() {
    return css`
      header {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: #f0f0f0;
      }

      ul {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      li {
        list-style: none;
        position: relative;
        font-weight: 500;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
      }

      a,
      a:active {
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        gap: 0.5rem;
        color: #333;
      }

      a:hover {
        color: blueviolet;
      }

      li:hover {
        color: blueviolet;
        border-bottom: 2px solid currentColor;
      }

      .container-header {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 2rem;
        max-width: 1200px;
        height: 121px;
        margin: auto;
        justify-content: space-between;
      }
    `;
  }
}

window.customElements.define("my-header", MyHeader);
