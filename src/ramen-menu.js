import ramen1png from './img/ramen1.png';
import ramen2png from './img/ramen2.png';

export default function printRamenMenu() {
    const ramenMenuWrapper = document.createElement('div');
    ramenMenuWrapper.classList.add('ramen-wrapper');

    const ramen1 = document.createElement('div');
    ramen1.classList.add('ramen-item')
    const ramen2 = document.createElement('div');
    ramen2.classList.add('ramen-item')
    ramen2.setAttribute('id', 'ramen-item2')
    const ramen3 = document.createElement('div');
    ramen3.classList.add('ramen-item')
    const ramen4 = document.createElement('div');
    ramen4.classList.add('ramen-item')

    const hr = document.createElement('hr');

    const ramen1Img = new Image();
    ramen1Img.classList.add('ramen-img')
    ramen1Img.src = ramen1png;

    const ramen2Img = new Image();
    ramen1Img.classList.add('ramen-img')
    ramen2Img.src = ramen2png;

    const ramen1Label = document.createElement('div');
    ramen1Label.classList.add('ramen-label')
    const ramen2Label = document.createElement('div');
    ramen2Label.classList.add('ramen-label')

    const ramen1Name = document.createElement('span');
    const ramen1Description = document.createElement('span');
    ramen1Name.classList.add('ramen-name')

    const ramen2Name = document.createElement('span');
    const ramen2Description = document.createElement('p');
    ramen2Name.classList.add('ramen-name')
    ramen2Description.setAttribute('id', 'ramen-description2')

    ramen1Name.textContent = 'Shoyu';
    ramen2Name.textContent = 'Miso';

    ramen1Description.textContent = 'Shoyu is the Japanese word for soy sauce, and this lighter-style ramen\­­—which can appear clear-brown or darker and cloudy—is flavored with exactly that.';
    ramen2Description.textContent = 'As its name suggests, miso ramen is flavored with the fermented soy bean paste of the same name, which can be made from soybeans, rice, or miso, and colored white or red.';

    ramen1Label.append(ramen1Name, ramen1Description);
    ramen2Label.append(ramen2Name, ramen2Description);

    ramen1.append(ramen1Img, ramen1Label);
    ramen2.append(ramen2Label, ramen2Img);

    ramenMenuWrapper.append(ramen1, ramen2, ramen1.cloneNode(true), ramen2.cloneNode(true), ramen1.cloneNode(true), ramen2.cloneNode(true))

    return ramenMenuWrapper;

}