import './style.css';

export default function component() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('main-wrapper')

    const mainLogo = document.createElement('span');
    mainLogo.textContent = 'Tampopo';

    const divider1 = document.createElement('hr');
    const divider2 = document.createElement('hr');

    const subLogo = document.createElement('span');
    subLogo.textContent = 'Ramen & Sushi by the sea'

    wrapper.append(mainLogo, divider1, divider2, subLogo)

    return wrapper;
}