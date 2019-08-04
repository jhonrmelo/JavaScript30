function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');
function checkSlide(e) {
    sliderImages.forEach(x => {
        //Half way throug image
        const slideinAt = (window.scrollY + window.innerHeight) - x.height / 2; 
        console.log(x.offsetTop);
        // Bottom of image
        const imagebottom = x.offsetTop + x.height;
        const isHalfShow = slideinAt > x.offsetTop;
        const isNotScrolledPast = window.scrollY < imagebottom;
        if(isHalfShow && isNotScrolledPast){
            x.classList.add('active');
        }else{
            x.classList.remove('active');  
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));