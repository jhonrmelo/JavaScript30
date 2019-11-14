const nav = document.querySelector('#main');
const topOFNav = nav.offsetTop;

function fixedNav() {
    console.log(topOFNav, window.scrollY);

    if (window.scrollY >= topOFNav) {
        document.body.style.paddingTop = 0;
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.classList.remove('fixed-nav');
    }
}


window.addEventListener('scroll', fixedNav);