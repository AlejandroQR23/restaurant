
const loadProducts = () => {

    const productsHTML = `
    <p class="text-center pb-2">Los mejores sabores hechos con fruta 100% natural</p>
    <div class="card-columns">
        <div class="card">
            <img src="assets/durazno.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de durazno </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/fresa.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de fresa </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/tejocote.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de tejocote </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/mandarina.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de mandarina </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/manzana-canela.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de manzana con canela </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/guayaba.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de guayaba </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/mango-chile.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de mango con chile </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
        <div class="card">
            <img src="assets/pina-chile.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> Mermelada de piña con chile </h5>
                <p class="card-text"> Deliciosa mermelada clasica de durazno natural</p>
                <p class="card-text">50$</p>
            </div>
        </div>
    </div>
    `;

    const products = document.createElement( 'section' );
    products.innerHTML = productsHTML;
    products.classList += 'products py-4';
    products.id = 'products';

    return products;

}

export { loadProducts }