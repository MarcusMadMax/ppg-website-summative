// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").style.height = "70px";
    document.getElementById("img").style.height = "60px";
  } else {
    document.querySelector("nav").style.height = "150px";
    document.getElementById("img").style.height = "140px";
  }
}


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


//Boat is moving in
$(function () {
    if($('.home-page .main-section').length > 0){
        var anime1 = anime({
            targets: '.main-section-am-cup-boat',
            translateX: [0, '-50vw'],
            easing: 'linear',
            duration: 1000,
            autoplay: false,
        })
    
        var mainS = $('.home-page .main-section').offset().top
        $(document).on('scroll', function () {
    
            var scrollTop = $(document).scrollTop()
            var progress = (scrollTop - (mainS - 500)) / 900
            anime1.seek(anime1.duration * progress)
        })
    }


    //Taxonomy
    if($('.what-we-do-page .taxonomy-control-container .container').length > 0){
        var mixer = mixitup('.what-we-do-page .taxonomy-control-container .container');
    }
})

if($('#firstName #lastName #email .form').length > 0){
//Form
//Event handler
function checkFilledIn() {
    var sValue = this.value
    var oAlphabeticExp = /^[A-Za-z]*$/
    var bResult = oAlphabeticExp.test(sValue)
    var isValid = false

    if (sValue == '') {
        this.style.backgroundColor = 'red'
        this.style.color = 'red'
        this.innerHTML = 'Please fill in'
    }else{
        this.style.backgroundColor = 'green'
        this.style.color = 'green'
        this.innerHTML = 'Thank you'
        isValid = true
    }
    return isValid
}

function checkLetters() {
    var sValue = this.value
    var oAlphabeticExp = /^[A-Za-z]*$/
    var bResult = oAlphabeticExp.test(sValue)
    var isValid = false

    if (sValue == '') {
        this.parentNode.previousElementSibling.style.color = '#FA0029'
        this.parentNode.previousElementSibling.innerHTML = 'Please fill in'
    } else if(bResult == false){
        this.parentNode.previousElementSibling.style.color = '#FA0029'
        this.parentNode.previousElementSibling.innerHTML = 'Only letters'
    }else{
        this.parentNode.previousElementSibling.style.color = 'green'
        this.parentNode.previousElementSibling.innerHTML = 'Thanks'
        isValid = true
    }
    return isValid
}

function checkEmail() {
    var sEmail = this.value
    var oAlphabeticExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
    var bResult = oAlphabeticExp.test(sEmail)
    var isValid = false

    if (sEmail == '') {
        this.parentNode.previousElementSibling.style.color = '#FA0029'
        this.parentNode.previousElementSibling.innerHTML = 'Please fill in'
    } else if(bResult == false){
        this.parentNode.previousElementSibling.style.color = '#FA0029'
        this.parentNode.previousElementSibling.innerHTML = 'Not a valid e-mail'
    }else{
        this.parentNode.previousElementSibling.style.color = 'green'
        this.parentNode.previousElementSibling.innerHTML = 'Thanks'
        isValid = true
    }
    return isValid
}

function checkAll(e){
    e.preventDefault()
    var isFirstName = checkLetters.call(oFirstName)
    var isLastName = checkLetters.call(oLastName)
    var isEmail = checkEmail.call(oEmail)
    var isAllVaild =  isFirstName && isEmail && isLastName

    if(isAllVaild == false){
        e.preventDefault() 
    }
 }
 


//Main programm
var oFirstName = document.querySelector('#firstName')
oFirstName.addEventListener('blur', checkLetters)

var oLastName = document.querySelector('#lastName')
oLastName.addEventListener('blur', checkLetters)

var oEmail = document.querySelector('#email')
oEmail.addEventListener('blur', checkEmail)


var oForm = document.querySelector('.form')
oForm.addEventListener('submit', checkAll)

}