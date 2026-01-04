import { LitElement, html } from "lit";
import "./features/top/my-top";
import "./features/header/my-header";
import "./features/footer/my-footer";
import "./features/bottom/my-bottom";

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
