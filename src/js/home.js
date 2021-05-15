
const loadHome = () => {

    const homeHTML = `
    <div class="hero row align-items-center py-4 px-2 bg">
        <div class="col-12 col-md-6">
            <h2>
                Mermelada Artesanal <br> 100% Mexicana
            </h2>
            <p class="py-2">
                Tenemos las mejores mermeladas hechas con fruta 100% natural
                cultivada en el estado de Guerrero, Mexico.  
            </p>
        </div>
        <div class="col-12 col-md-6">
            <img src="./assets/mermelada-frame.jpg" alt="" class="img-fluid rounded">
        </div>
    </div>

    <div class="location row align-items-center py-4 px-2">
        <div class="col-12 col-md-6 order-1 order-md-0">
            <img src="./assets/chilpo.jpg" alt="" class="img-fluid rounded">
        </div>
        <div class="col-12 col-md-6 order-0 order-md-1">
            <h2>
                En el corazón de Guerrero
            </h2>
            <p class="py-2">
                Contamos con envíos a todo México, pero puedes visitarnos en Chilpancingo,
                en el mero corazón de Guerrero.
            </p>
        </div> 
    </div>
    `;

    const home = document.createElement( 'section' );
    home.innerHTML = homeHTML;
    home.classList += 'home py-4 px-4';
    home.id = 'home';

    return home;

}

export { loadHome }