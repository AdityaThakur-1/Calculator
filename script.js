let buttons = document.querySelectorAll('button')
let display = document.querySelector('.display')

let currentValue = '0'

buttons.forEach(function(button){
    button.addEventListener('click', function(){

        let value = button.innerText

        if(value === 'AC'){
            currentValue = '0'

        } else if(value === 'DEL'){
            currentValue = currentValue.slice(0, -1)

            if(currentValue === ''){
                currentValue = '0'
            }

        } else if(value === '='){
            try{
                currentValue = String(eval(currentValue))
            } catch{
                currentValue = 'error'
            }

        } else if(value === '%'){
            currentValue = String(eval(currentValue) / 100)

        } else if(['+', '-', '*', '/'].includes(value)){
            currentValue += value

        } else {
            if(currentValue === '0'){
                currentValue = value
            } else {
                currentValue += value
            }
        }

        display.innerText = currentValue
    })
})