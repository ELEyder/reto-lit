import { LitElement, html } from "lit";
import "./features/header/my-header";
import "./features/content/my-content";

export class AppRoot extends LitElement {

  render() {
    return html`
      <main>
        <my-header></my-header>
        <my-content></my-content>
      </main>
    `;
  }
  
}

window.customElements.define("app-root", AppRoot);
