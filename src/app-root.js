import { LitElement, html } from "lit";
import "./features/header/my-header";

export class AppRoot extends LitElement {

  render() {
    return html`
      <main>
        <my-header></my-header>
      </main>
    `;
  }
  
}

window.customElements.define("app-root", AppRoot);
