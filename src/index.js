import 'bootstrap';
import './styles.scss';

import { PageLoader } from './js/page-loader';

const loader = new PageLoader();

// * Switching pages
if( loader ){
    
    const homeBtn    = document.querySelector( '#homeLink' );
    const prodBtn    = document.querySelector( '#prodLink' );
    const contactBtn = document.querySelector( '#contactLink' );

    homeBtn.addEventListener( 'click', (e) => {
        e.preventDefault();
        loader.loadContent( 'home' );
    });

    prodBtn.addEventListener( 'click', (e) => {
        e.preventDefault();
        loader.loadContent( 'products' );
    });

    contactBtn.addEventListener( 'click', (e) => {
        e.preventDefault();
        loader.loadContent( 'contact' );
    });

}
