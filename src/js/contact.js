
const loadContact = () => {

    const contactHTML = `
    <p class="text-center text-muted">
        Ponte en contacto con nostros para conocer las distintas formas en que
        puedes conseguir nuestros productos
    </p>
    <form>
        <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name" class="form-control">
            <small id="helpName" class="form-text text-muted">Tu nombre nos ayudara a brindarte mejor atención</small>
        </div>
        <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" name="email" id="email" class="form-control" required>
            <small id="helpEmail" class="form-text text-muted">No compartiremos tu email</small>
        </div>
        <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea name="message" id="message" rows="3" class="form-control" required></textarea>
            <small id="helpMessage" class="form-text text-muted">Haznos saber en qué podemos ayudarte</small>
         </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    `;

    const contact = document.createElement( 'section' );
    contact.innerHTML = contactHTML;
    contact.classList += 'contact py-4 px-4 bg mb-5';
    contact.id = 'contact';

    return contact;

}

export { loadContact }