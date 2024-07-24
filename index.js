let count = document.getElementById('counter')
let btn = document.getElementById('btn')
let save = document.getElementById('save')
let reset = document.getElementById('reset')
let message = document.getElementById('message')

btn.addEventListener('click', () => {
    count.innerHTML = Number(count.innerHTML) + 1  
})

reset.addEventListener('click', () => {
    count.innerHTML = 0
    message.textContent = "Previous Entries: "
})

save.addEventListener('click', () => {
    let dashStr = count.innerHTML + ' - '
    message.textContent =message.innerHTML + dashStr
} )

// function save() {
//    let dashStr = count.innerHTML + ' - '
//    message.textContent =message.innerHTML + dashStr
// }

