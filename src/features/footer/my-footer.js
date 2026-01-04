import { css, html, LitElement } from "lit";
import { Instagram } from "lucide-static";
import { Linkedin } from "lucide-static";
import { Youtube } from "lucide-static";
import { X } from "lucide-static";

export class MyFooter extends LitElement {
  static get properties() {
    return {
      socialNetworks: { type: Array },
      email: { type: String },
      number: { type: String },
    };
  }

  constructor() {
    super();
    this.email = "sandra.ruiz@entelgy.com"
    this.number = "+51 999 888 777"
    this.socialNetworks = [
      {
        url: "https://x.com/entelgy",
        icon: X,
      },
      {
        url: "https://www.youtube.com/@Entelgy_",
        icon: Youtube,
      },
      {
        url: "https://www.linkedin.com/company/entelgy/",
        icon: Linkedin,
      },
      {
        url: "https://www.instagram.com/entelgy_/",
        icon: Instagram,
      },
    ];
  }

  render() {
    return html`
      <footer>
        <div class="container">
          <div class="row-icons">
            <img class="logo" src="./logo-dark.svg" alt="Vite logo" />
            <div class="social-networks">
              ${this.socialNetworks.map(
                (social) =>
                  html`<a href=${social.url} target="_blank"
                    ><span .innerHTML=${social.icon}></span
                  ></a>`
              )}
            </div>
          </div>
          <div class="row">
            <p class="title">Páginas</p>
            <a href="#">Inicio</a>
            <a href="#">Favoritos</a>
            <a href="#">Sobre nosotros</a>
            <a href="#">Blog</a>
            <a href="#">Afiliados</a>
            <a href="#">Datos</a>
          </div>
          <div class="row">
            <p class="title">Donde estamos</p>
            <a href="#">España</a>
            <a href="#">Argentina</a>
            <a href="#">Brasil</a>
            <a href="#">Chile</a>
            <a href="#">Colombia</a>
            <a href="#">México</a>
            <a href="#">Perú</a>
            <a href="#">USA</a>
          </div>
          <div class="row">
            <p class="title">Contacto</p>
            <a href="mailto:${this.email}">${this.email}</a>
            <a href="tel:${this.number}">${this.number}</a>
            <a></a>
          </div>
        </div>
      </footer>
    `;
  }

  static get styles() {
    return css`
      a {
        color: white;
        text-decoration: none;
      }

      a:hover {
        color: #ae8fdb
      }

      p {
        margin: 0;
        color: white;
      }

      footer {
        background-color: #303030;
      }

      .container {
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        padding: 4rem 0;
      }

      .row-icons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
      }

      .row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .title {
        margin: 0;
        color: white;
        font-weight: bold;
      }

      .social-networks {
        display: flex;
        gap: 0.5rem;
        justify-content: space-evenly;
      }
    `;
  }
}

window.customElements.define("my-footer", MyFooter);
