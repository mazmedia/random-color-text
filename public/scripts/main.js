const mainColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

const clear = () => {
    document.querySelector('#print').innerHTML = ''
}

document.querySelector('#all').addEventListener('click', () => {
    clear()

    mainColors.forEach(color => {
        // Setup parent element
        const parentEl = document.querySelector('#print')
        
        // Setup elements
        const prnt = document.createElement('span')
        const brk = document.createElement('br')

        // Configure the elements
        prnt.textContent = color
        prnt.style.color = color

        // Append finished elements
        parentEl.appendChild(prnt)
        parentEl.appendChild(brk)
    })
})

document.querySelector('#random').addEventListener('click', () => {
    clear()

    // Setup parent element
    const parentEl = document.querySelector('#print')
    parentEl.innerHTML = ''

    // Setup constants
    const randNum = Math.floor(Math.random() * 6)
    const colorItemNumber = mainColors[randNum]

    // Setup elements
    const prnt = document.createElement('span')
    const brk = document.createElement('br')

    // Configure the elements
    prnt.textContent = colorItemNumber
    prnt.style.color = colorItemNumber

    // Append finished elements
    parentEl.appendChild(prnt)
    parentEl.appendChild(brk)
})