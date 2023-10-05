document.addEventListener('DOMContentLoaded', () => {


    const numbersDiv = document.querySelector('#numbersDiv')
    const outputField = document.querySelector('#output') 

    let output = ''

    for(i = 0; i < 10; i++) {
        const numBtn = document.createElement('button')
        numBtn.innerText = i
        numbersDiv.appendChild(numBtn)

        numBtn.addEventListener('click', () => {
            
            if(output.length > 30) {
                output += ''
            } else {
                output += numBtn.innerText
                outputField.innerText = output
            }
        })
    }

    //for each function btn, on click --> output += btn.innerText

    const funcDiv = document.querySelector('#funcDiv')
    funcBtnChars = ['+', '-', '/', 'x', '.', '=']

    for(i = 0; i < 6; i++) {
        const funcBtn = document.createElement('button')
        funcBtn.id = `funcBtn${i}`
        funcDiv.appendChild(funcBtn)


        funcBtn.innerText = funcBtnChars[i]

        funcBtn.addEventListener('click', () => {
            output += funcBtn.innerText
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