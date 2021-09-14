const burger = () => {
    
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-menu');
    const links = document.querySelectorAll('.header-menu .header_link');
    const scroll = calcScroll();

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            document.body.style.marginRight = `${scroll}px`;
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (burger.classList.contains('active')) {
                burger.click();
            }
            
        })
    })



}

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';

    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

export default burger;