const bars = document.querySelector('.bars')
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')
const navBarLogo = document.querySelector('li a img')
const navBar = document.querySelector('nav')
const navLinkA = document.querySelectorAll('.nav-links li a')
const address = document.querySelector('.contact-city')
const taxControlButtons = document.querySelector('.taxonomy-control-container-buttons')

const navSlide = () => {
    bars.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active')

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + .5}s`
            }
        })

        //Bars Animation
        bars.classList.toggle('toggle')
        if ($('.what-we-do-page').length > 0) {
        //Get rid of taxonomy
        taxControlButtons.classList.toggle('no-tax')
        }
    })

}
navSlide()

w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 1200;
if (w >= targetWidth) {
    // When scrolling NavBar changes in Desktop View
    window.onscroll = function () { scrollFunction() };

    scrollFunction = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navBar.classList.add('style-nav-bar-in')
            navBar.classList.remove('style-nav-bar-out')
            navBarLogo.classList.add('style-logo-in')
            navBarLogo.classList.remove('style-logo-out')

        } else {
            navBar.classList.remove('style-nav-bar-in')
            navBar.classList.add('style-nav-bar-out')
            navBarLogo.classList.remove('style-logo-in')
            navBarLogo.classList.add('style-logo-out')
        }
    }
}

//Boat is moving in
$(function () {
    if ($('.home-page .main-section').length > 0) {
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
    if ($('.what-we-do-page .taxonomy-control-container .container').length > 0) {
        var mixer = mixitup('.what-we-do-page .taxonomy-control-container .container');
    }
})

if ($('#firstName #lastName #email .form').length > 0) {
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
        } else {
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
        } else if (bResult == false) {
            this.parentNode.previousElementSibling.style.color = '#FA0029'
            this.parentNode.previousElementSibling.innerHTML = 'Only letters'
        } else {
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
        } else if (bResult == false) {
            this.parentNode.previousElementSibling.style.color = '#FA0029'
            this.parentNode.previousElementSibling.innerHTML = 'Not a valid e-mail'
        } else {
            this.parentNode.previousElementSibling.style.color = 'green'
            this.parentNode.previousElementSibling.innerHTML = 'Thanks'
            isValid = true
        }
        return isValid
    }

    function checkAll(e) {
        e.preventDefault()
        var isFirstName = checkLetters.call(oFirstName)
        var isLastName = checkLetters.call(oLastName)
        var isEmail = checkEmail.call(oEmail)
        var isAllVaild = isFirstName && isEmail && isLastName

        if (isAllVaild == false) {
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


//Contact
$(function () {
    $('.face').on('click', function () {
        var sState = $(this).data('state')

        if (sState == 'closed') {
            //open it
            $(this).next().slideDown(400)
            $(this).animate(1000).css('border-bottom', '2px solid rgba(0, 0, 0, 0)')
            sState = $(this).data('state', 'open')
        } else {
            $(this).next().slideUp(600)
            $(this).animate(1000).css('border-bottom', '2px solid rgba(0, 0, 0, 0.5)')
            sState = $(this).data('state', 'closed')
        }
    })
})