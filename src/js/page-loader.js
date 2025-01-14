
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

    loadFooter() {

        const footerHTML = `
        <!-- Footer elements -->
        <div class="container pt-4">
    
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a href="https://www.facebook.com/mermeladart" class="nav-link" target="_blank">
                        <i class="bi bi-facebook"> </i>
                    </a>
                </li>
                <li class="nav-item">
                    <!-- Twitter -->
                    <a href="#" class="nav-link">
                        <i class="bi bi-twitter"> </i>
                    </a>
                </li>
                <li class="nav-item">
                    <!--Instagram-->
                    <a href="https://www.instagram.com/sweetfruit_jam/" class="nav-link" target="_blank">
                        <i class="bi bi-instagram"> </i>
                    </a>
                </li>
            </ul>
    
        </div>
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2021 Copyright:
            <a href="#"> Sweet Fruit </a>
        </div>
        `;
    
        const footer = document.createElement( 'footer' );
        footer.innerHTML = footerHTML;
        footer.classList += "page-footer bg";
        this.body.append( footer );
    
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
        this.loadFooter();

    }

} 