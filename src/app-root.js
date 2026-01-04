import { LitElement, html } from "lit";
import "./features/top/my-top";
import "./features/header/my-header";
import "./features/content/my-content";
import "./features/footer/my-footer";
import "./features/bottom/my-bottom";
import "./features/favorite-list/favorite-list";

export class AppRoot extends LitElement {
  static properties = {
    showFavorites: { type: Boolean },
  };

  constructor() {
    super();
    this.showFavorites = false;
  }

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
  }

  render() {
    return html`
      <main>
        <my-top></my-top>
        <my-header @toggle-favorites=${this.toggleFavorites}></my-header>
        <my-content></my-content>
        <my-footer></my-footer>
        <my-bottom></my-bottom>
        <favorite-list
          ?open=${this.showFavorites}
          @toggle-favorites=${this.toggleFavorites}
        ></favorite-list>
      </main>
    `;
  }
}

window.customElements.define("app-root", AppRoot);
