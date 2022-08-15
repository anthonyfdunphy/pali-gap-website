// const imgPos = document.getElementById('middle');
var r = window.getComputedStyle(document.documentElement).getPropertyValue('--scrollPos');



window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY;
    const maxScroll = window.innerHeight;

    console.log(r);

    document.documentElement.style.setProperty('--scrollPos', scrolled + 100 + 'px');
    document.documentElement.style.setProperty('--scrollPosEven', scrolled * -1 + 'px');
    document.documentElement.style.setProperty('--scrollPosOdd', scrolled + 'px');


    
})
