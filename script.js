let email = document.getElementById('email')
let err = document.getElementById('error')

let chk = () => {
    let allValid = true
    if (!email.value.includes('@')) {
        err.innerHTML = 'Please enter a valid email'
        allValid = false
    } else {
        err.innerHTML = ''
    }

    if (allValid) {
        document.querySelector('.send i').style.display = 'none'
        document.getElementById('load').style.display = 'flex'

        setTimeout(() => {
            document.getElementById('load').style.display = 'none'
            document.getElementById('msg').style.display = 'flex'
            document.getElementById('overlay').style.display = 'block'
            document.getElementById('success').innerHTML = `Email has been sent to ${email.value}`;
            email.value = ''
            document.querySelector('.send i').style.display = 'flex'
        }, 1500)

    }
}

email.onfocus = function () {
    err.innerHTML = ''
}

let clr = () => {
    document.getElementById('msg').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
}

document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('msg').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'


})