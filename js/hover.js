function hoverItem(num) {
    item[num].addEventListener('mouseover', () => {
        itemActive = document.querySelector('.portfolio .item.active');
        console.log(num ,itemActive);
        
            itemActive.classList.remove('active');
            console.log('mouseover-remove', num ,itemActive);
            item[num].classList.add('active');
            console.log('mouseover-add', num ,item[num]);
       
    })
}

let item = document.querySelectorAll('.portfolio .item');
var itemActive = document.querySelector('.portfolio .item.active');
var screenWidth = window.innerWidth;
var j = 0;
var p = 0;
var k = 0;

// console.log(window.innerWidth, document.documentElement.clientWidth)
console.log('현재 크기:', screenWidth);

if (screenWidth > 1024) {
    console.log('첫번 째 1024px 초과입니다')
    for (j = 0; j < item.length; j++) {
        hoverItem(j);
        // console.log('j', j);
    }
}

else {
    console.log('첫번 째 1024px 초과가 아닙니다')
    for (p = 0; p < item.length; p++) {
        // console.log(p);
        item[p].classList.remove('active');
        console.log(item);
        // console.log('j', j);
    }
}

window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    itemActive = document.querySelector('.portfolio .item.active');

    console.log('resize 발생!');
    console.log('현재 크기:', screenWidth);

    if (screenWidth > 1024) {
        q = 0;
        if (itemActive != null ) {
            console.log('not null 실행');
            for (q = 0; q < item.length; q++) {
                console.log('q', q);
                console.log(itemActive);
                console.log(item[q]);
                console.log(item[q] == itemActive);
    
                if (item[q] == itemActive) {
                    item[q].classList.add('active');
                }
                else {
                    item[q].classList.remove('active');
                }
            }
        }
        else {
            console.log('null 실행');
            item[0].classList.add('active');
            console.log('설정완료');
        }
        
        console.log('두 번 째1024px 초과입니다')
        for (k = 0; k < item.length; k++) {
            hoverItem(k);
            console.log('k', k);
        }
    }

    else {
        console.log(' 두번째 1024px 초과가 아닙니다')
        for (p = 0; p < item.length; p++) {
            console.log(p);
            item[p].classList.remove('active');
            console.log(item);
            // console.log('j', j);
        }
    }
})


