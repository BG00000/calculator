const numButtons = document.querySelectorAll('#container div button')

numButtons.forEach((button) => {
    let mouseDown
    button.addEventListener('mouseup', () => {
        mouseDown = false
        button.style.borderLeft = '2px solid rgb(160, 160, 160)'
        button.style.borderBottom = '2px solid rgb(160, 160, 160)'
    })

    button.addEventListener('mouseout', () => {
        button.style.borderLeft = '2px solid rgb(160, 160, 160)'
        button.style.borderBottom = '2px solid rgb(160, 160, 160)'
    })
    
    button.addEventListener('mousedown', () => {
        mouseDown = true
        if (mouseDown) {
            button.style.borderLeft = 'none'
            button.style.borderBottom = 'none'
        }
    })

})

