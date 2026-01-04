import { LitElement, html } from "lit";
import "./features/top/my-top";
import "./features/header/my-header";
import "./features/content/my-content";
import "./features/footer/my-footer";
import "./features/bottom/my-bottom";

export class AppRoot extends LitElement {

  render() {
    return html`
      <main>
        <my-top></my-top>
        <my-header></my-header>
        <my-content></my-content>
        <my-footer></my-footer>
        <my-bottom></my-bottom>
      </main>
    `;
  }
  
}

window.customElements.define("app-root", AppRoot);
