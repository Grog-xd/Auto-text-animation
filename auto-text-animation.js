const texts = document.querySelectorAll('[data-speed]')



texts.forEach(text =>{ 

    let str = text.textContent
    if(!str){
        throw new Error('Please use this script with text tags only')
    }
    let result = ''
    let i = 0
    text.innerHTML = ''

    let interval = setInterval(() => {
        result += str[i]
        i++
        text.innerHTML = result
        if(i == str.length){
            if(text.dataset.infinity == 'true'){
                result = ''
                i = 0
            }
            else{
                clearInterval(interval)
            }
            
        }
    }, text.dataset.speed);
})

