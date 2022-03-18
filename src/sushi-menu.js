import menu from './menu.js';

export default function printSushiMenu() {
    const sushiMenuWrapper = document.createElement('div');
    sushiMenuWrapper.classList.add('sushi-wrapper');

    const makimonoName = document.createElement('span')
    makimonoName.textContent = 'Makimono'
    makimonoName.classList.add('makimono-ul-name')

    const makimono = document.createElement('ul');


    makimono.classList.add('makimono-li');


    const makimonoLi1 = document.createElement('li');
    makimonoLi1.textContent = 'Avocado'

    const makimonoLi2 = document.createElement('li');
    makimonoLi2.textContent = 'Salmon'

    const makimonoLi3 = document.createElement('li');
    makimonoLi3.textContent = 'Spider';
    const makimonoLi3Sub = document.createElement('span');
    makimonoLi3Sub.textContent = 'Tempura soft-shell crab, cucumber, avocado, and spicy mayo'

    makimonoLi3.appendChild(makimonoLi3Sub)

    /* const makimonoLi4 = document.createElement('li');
    const makimonoLi5 = document.createElement('li');
    const makimonoLi6 = document.createElement('li');
    const makimonoLi7 = document.createElement('li');
    const makimonoLi8 = document.createElement('li');
    const makimonoLi9 = document.createElement('li');
    const makimonoLi10 = document.createElement('li');
    const makimonoLi11 = document.createElement('li');
    const makimonoLi12 = document.createElement('li'); */

    const sushiName = document.createElement('span');
    sushiName.textContent = 'Sushi';
    sushiName.classList.add('sushi-ul-name')
    const sushi = document.createElement('ul');
    sushi.classList.add('sushi-li')

    const sushiLi1 = document.createElement('li');
    sushiLi1.textContent = 'Tuna';
    const sushiLi2 = document.createElement('li');
    sushiLi2.textContent = 'Salmon';
    const sushiLi3 = document.createElement('li');
    sushiLi3.textContent = 'Eeel';
    const sushiLi4 = document.createElement('li');
    sushiLi4.textContent = 'Shrimp';
    const sushiLi5 = document.createElement('li');
    sushiLi5.textContent = 'Roe';

    sushi.append(sushiLi1, sushiLi2, sushiLi3, sushiLi4, sushiLi5);

    makimono.append(makimonoLi1, makimonoLi2, makimonoLi3, makimonoLi1.cloneNode(true), makimonoLi2.cloneNode(true), makimonoLi3.cloneNode(true), makimonoLi1.cloneNode(true), makimonoLi2.cloneNode(true), makimonoLi3.cloneNode(true), makimonoLi1.cloneNode(true), makimonoLi2.cloneNode(true), makimonoLi3.cloneNode(true))
    sushiMenuWrapper.append(makimonoName, makimono, sushiName, sushi);

    return sushiMenuWrapper;



}