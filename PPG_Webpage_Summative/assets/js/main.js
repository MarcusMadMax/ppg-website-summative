//Timeline for logo to move up & navigation to move in / out
var moveIn = anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    autoplay: false,
    duration: 0.1,
})

moveIn
    .add({
        targets: '.nav-content',
        translateX: ('100%'),
        autoplay: false,
        begin: function () {
            document.querySelector('.nav-content').style.display = 'block';
        },
        easing: 'linear'
    })

    .add({
        targets: '.nav-content ul li',
        translateX: ('100%'),
        delay: anime.stagger(500),
        autoplay: false,
        begin: function () {
            document.querySelector('.nav-content ul li').style.display = 'block';
        },
    }, 800)

    // .add({
    //     targets: '#logo img',
    //     opacity: [0, 1],
    //     scale: [0,1],
    //     duration: 10,
    //     autoplay: false,
    // }, 900)



var moveOut = anime.timeline({
    easing: 'easeOutExpo',
    duration: .1,
    autoplay: false,
})

//Timelie Move Out
moveOut
    .add({
        targets: '.nav-content',
        translateX: ('-100%'),
        autoplay: false,
        begin: function () {
            document.querySelector('.nav-content').style.display = 'none';
        },
    })

    .add({
        targets: '.nav-content ul li',
        translateX: ('-100%'),
        delay: anime.stagger(500),
        autoplay: false,
        begin: function () {
            document.querySelector('.nav-content ul li').style.display = 'none';
        },
    }, 800)

    // .add({
    //     targets: '.nav-content a img',
    //     translateX: ('100%'),
    //     duration: 10,
    //     autoplay: false,
    //     begin: function () {
    //         document.querySelector('.nav-content a img').style.display = 'none';
    //     },
    // }, 900)
    

//Changing hamburger / bars Move In / Move Out Execution
const barsBtn = document.querySelector('.bars')
let menuOpen = false
barsBtn.addEventListener('click', () => {
    if (!menuOpen) {
        moveIn.play()
        barsBtn.classList.add('change')
        menuOpen = true
    } else {
        moveOut.play()
        barsBtn.classList.remove('change')
        menuOpen = false
    }
})

//Blending nav out when clicking link
let linkBtn = document.querySelectorAll('.nav-content ul li a')
for (i = 0; i < linkBtn.length; i++) {
    let link = linkBtn[i]
    link.addEventListener('click', () => {
        moveOut.play()
        barsBtn.classList.remove('change')
        menuOpen = false
    })
}

// const listComment = document.querySelector('List-comment-cricket')

// function linksHover (){
//     // if(listComment === 'none'){

//     // }else{

//     // }
//     console.log('click')
// }

// var showLinkComment = document.querySelector('li .list-items')
// showLinkComment.addEventListener('mouseover', linksHover)
$(function () {
    var anime1 = anime({
        targets: '.main-section-am-cup-boat',
        translateX: [0, '-50vw'],
        easing: 'linear',
        duration: 1000,
        autoplay: false,
    })

    var mainS = $('.home .main-section').offset().top
    $(document).on('scroll', function () {

        var scrollTop = $(document).scrollTop()
        var progress = (scrollTop - (mainS - 500)) / 900
        anime1.seek(anime1.duration * progress)
    })
})

//Taxonomy
var mixer = mixitup('.container');
