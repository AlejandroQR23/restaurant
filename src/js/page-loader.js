
import { loadHome } from './home';
import { loadProducts } from './products';
import { loadContact } from './contact';

export class PageLoader {

    constructor() {
        
        this.body = document.body;
        this.contentDiv = document.querySelector("#content");

        this.loadPage();

    }

    loadHeader() {
        const headerHTML = `
        <div class="container pb-2">
            <div class="logo text-center">
                <img src="./assets/sweet-logo.png" alt="sweet fruit logo">
            </div>
        </div>
        <nav class="nav nav-pills justify-content-center">
            <a href="#home" class="nav-link active" id="homeLink" data-toggle="tab">Inicio</a>
            <a href="#products" class="nav-link" id="prodLink" data-toggle="tab">Productos</a>
            <a href="#" class="nav-link" id="contactLink" data-toggle="tab">Contacto</a>
        </nav>
        `;

        const header = document.createElement("header");
        header.innerHTML = headerHTML;
        header.classList += "py-4";
        this.body.insertBefore( header, this.contentDiv );
    }

    loadContent( content='home' ) {

        if( this.content ) {
            this.contentDiv.removeChild( this.content );
        }

        if( content === 'home' ) {
            this.content = loadHome();
            this.contentDiv.appendChild( this.content );
        } else if( content === 'products' ) {
            this.content = loadProducts();
            this.contentDiv.appendChild( this.content );
        } else if( content === 'contact' ){
            this.content = loadContact();
            this.contentDiv.appendChild( this.content );
        }

    }

    loadPage() {

        this.loadHeader();
        this.loadContent();

    }

} 