document.addEventListener('DOMContentLoaded', () => {


    const numbersDiv = document.querySelector('#numbersDiv')
    const outputField = document.querySelector('#output') 

    let output = ''

    for(i = 0; i < 10; i++) {
        const btn = document.createElement('button')
        btn.innerText = i
        numbersDiv.appendChild(btn)

        btn.addEventListener('click', () => {
            output += btn.innerText
            outputField.innerText = output
        })
    }

    const numButtons = document.querySelectorAll('#container div button')

    numButtons.forEach((button) => {
        let mouseDown
        button.addEventListener('mouseup', () => {
            mouseDown = false
            button.style.borderLeft = '2px solid rgb(160, 160, 160)'
            button.style.borderBottom = '2px solid rgb(103, 103, 103)'
        })

        button.addEventListener('mouseout', () => {
            button.style.borderLeft = '2px solid rgb(160, 160, 160)'
            button.style.borderBottom = '2px solid rgb(103, 103, 103)'
        })
        
        button.addEventListener('mousedown', () => {
            mouseDown = true
            if (mouseDown) {
                button.style.borderLeft = 'none'
                button.style.borderBottom = 'none'
            }
        })

    })



})