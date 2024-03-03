function Calculate() {

    var n1 = parseInt(document.querySelector("#number1").value)
    var n2 = parseInt(document.querySelector("#number2").value)
    var operation = document.querySelector("#operation").value
    var result = 0

    if (operation == "+") {
        result = n1 + n2
    } else if (operation == "-") {
        result = n1 - n2
    } else if (operation == "/") {
        result = n1 / n2
    } else if (operation == "*") {
        result = n1 * n2
    }

    //alternative
    // switch(operation){
    //     case "+":
    //         result = n1 + n2
    //         break;
    //     case "-":
    //         result = n1 - n2
    //         break;
    //     case "*":
    //         result = n1 * n2
    //         break;
    //     case "/":
    //         result = n1 / n2
    //         break;
    // }
    
    var screen = document.getElementById("screen")
    screen.innerText = result
}    
window.onload = function() {
    var submitButton = document.querySelector("#submit")
    submitButton.onclick = function(e){
        Calculate()
    }
}