window.onload = function(){
    const dom = document.querySelector('body').children;
    const button1 = document.querySelector("#button1")
    const button2 = document.querySelector("#button2")
    const button3 = document.querySelector("#button3")
    
    button1.onclick = function(){
        for ( let i = 0;i < dom.length;i++){
            if (dom[i].innerText == 'change my color!'){
                dom[i].style.backgroundColor = "green"
            }
        }
    }

    button2.onclick = function(){
        

        for ( let i = 0;i < dom.length;i++){
            if (dom[i].innerText == 'remove me!'){
                dom[i].remove()
            }
        }

        
    }

    button3.onclick = function(){
        const newDiv = document.createElement('div')
        newDiv.innerText = 'new div'
        newDiv.style.backgroundColor = "yellow"
        document.querySelector('body').appendChild(newDiv)
    }

}