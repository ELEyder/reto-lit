import { LitElement, html } from "lit";
import "./features/header/my-header";
import "./features/bottom/my-bottom";

export class AppRoot extends LitElement {

  render() {
    return html`
      <main>
        <my-header></my-header>
        <my-bottom></my-bottom>
      </main>
    `;
  }
  
}

window.customElements.define("app-root", AppRoot);
