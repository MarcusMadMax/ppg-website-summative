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