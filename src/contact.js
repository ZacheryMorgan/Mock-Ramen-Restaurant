export default function printContact() {
    const form = document.createElement('form');
    const formName = document.createElement('input');
    const formEmail = document.createElement('input');
    const formMessage = document.createElement('textarea');
    form.classList.add('form');

    formName.setAttribute('type', 'text');
    formName.setAttribute('placeholder', 'Enter your name');
    formName.classList.add('form-name');

    formEmail.setAttribute('type', 'email');
    formEmail.setAttribute('placeholder', 'Enter your email');
    formEmail.classList.add('form-email');

    formMessage.setAttribute('type', 'text');
    formMessage.setAttribute('placeholder', 'Please enter your message here')
    formMessage.classList.add('form-message');


    form.append(formName, formEmail, formMessage);

    return form;
}