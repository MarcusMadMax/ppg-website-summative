const listComment = document.querySelector('List-comment-cricket')

function linksHover (){
    // if(listComment === 'none'){

    // }else{

    // }
    console.log('click')
}

var showLinkComment = document.querySelector('li .list-items')
showLinkComment.addEventListener('mouseover', linksHover)

$(function () {

    var anime1 = anime({
        targets: ('.main-section .main-section-am-cup-boat'),
        translateX: [0, '-50em'],
        easing: 'linear',
        duration: 10000,
        autoplay:false,
    })

    var mainS = $('.main-section').offset().top
    $(document).on('scroll',function(){

        var scrollTop = $(document).scrollTop()
        var progress = (scrollTop - mainS)/10
        anime1.seek(anime1.duration * progress)
    })
})