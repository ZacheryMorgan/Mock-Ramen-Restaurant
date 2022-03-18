import ramenMenu from './ramen-menu.js';
import allMenu from './all-menu.js';
import sushiMenu from './sushi-menu.js';

export default function printMenu() {

    function reset(a) {
        sushiAll.style.color = 'white'
        ramenAll.style.color = 'white'
        //drinksAll.style.color = 'white'
        a.style.color = 'orange';
    }

    const wrapper = document.createElement('div');

    const nav = document.createElement('div');
    nav.classList.add('main-nav');

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const menuAll = document.createElement('li');
    menuAll.textContent = 'All';
    menuAll.addEventListener('click', (e) => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.append(nav, allMenu())
    })

    const ramenAll = document.createElement('li');
    ramenAll.textContent = 'Ramen';
    ramenAll.addEventListener('click', (e) => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.append(nav, ramenMenu())
        reset(ramenAll);
    })

    const sushiAll = document.createElement('li');
    sushiAll.textContent = 'Sushi';
    sushiAll.classList.add('sushi-menu')
    sushiAll.addEventListener('click', (e) => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.append(nav, sushiMenu())
        reset(sushiAll);
    })

    const drinksAll = document.createElement('li');
    drinksAll.textContent = 'Drinks';

    const hr = document.createElement('hr');

    menuList.append(menuAll, ramenAll, sushiAll, drinksAll);
    nav.append(menuList, hr);
    wrapper.append(nav, allMenu())

    return wrapper
}