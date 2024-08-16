let menuBtn = document.querySelector('.mobile_nav_btn');
let mobileNav = document.querySelector('.mobile_nav');
let white = document.querySelectorAll('.white');
let animation = document.querySelectorAll('.guide .content .item a .text .text_box');
// console.log(portfolioHover);
let i = 0;

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('on');
    if (document.querySelectorAll('.on').length > 0) {
        document.querySelector('.logo a').style.display = 'none';
        document.querySelector('.mobile_nav_btn a').style.display = 'none';
        for (i = 0; i < white.length; i++) {
            white[i].style.display = 'block';
        }
    }

    else {
        document.querySelector('.logo a').style.display = 'block';
        document.querySelector('.mobile_nav_btn a').style.display = 'block';
        for (i = 0; i < white.length; i++) {
            white[i].style.display = 'none';
        }
    }
})