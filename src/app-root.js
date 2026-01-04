import { LitElement, html } from "lit";
import "./features/header/my-header";
import "./features/top/my-top";

export class AppRoot extends LitElement {

  render() {
    return html`
      <main>
        <my-top></my-top>
        <my-header></my-header>
      </main>
    `;
  }
  
}

window.customElements.define("app-root", AppRoot);
