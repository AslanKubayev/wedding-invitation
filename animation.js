const animItems = document.querySelectorAll('._anim-items');
const bigSmallHeart = document.getElementsByClassName("heart");
// const audioButton = document.getElementsByClassName("audio");
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
        }        
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

animOnScroll()

function bigToSmall() {
    bigSmallHeart[0].style.transform = "scale(1)"
    setTimeout(smallToBig, 200)
}


function smallToBig() {
    bigSmallHeart[0].style.transform = "scale(1.3)"
    setTimeout(bigToSmall, 200)
}

smallToBig()

function audioPlayPause() {
    if (audio.duration > 0 && !audio.paused) {
        audio.pause()
        pause.style.display = "none"
        play.style.display = "block"
    } else{
        audio.play()
        pause.style.display = "block"
        play.style.display = "none"
    }
}