
let a = setInterval(myclock)

function myclock() {
    let time = new Date()
    document.querySelector(".j-clock").innerHTML = time.toLocaleTimeString()
}

