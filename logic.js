function initialize() {
    let caps = document.getElementById('caps');
    let lowCase = document.getElementById('lowCase');
    let numbers = document.getElementById('numbers');
    let symbols = document.getElementById('symbols');
    counter = 0
    numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    symbolArray = ['!', '@', '#', '$', '%', '&', '?'];
    capsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
};
/*function generate() {
    var password = ""
    for(var i = 0; i < 30; i++) {  
       var balls = Math.floor(Math.random() * 4)
       if(balls == 1) { 
        var pass = Math.floor(Math.random() * numArray.length)
        password = password + numArray[pass]
        }
        else if(balls == 2) {
        var pass2 = Math.floor(Math.random() * alphabetArray.length)
            password = password + alphabetArray[pass2]
        } 
        else if(balls == 3) {
        var pass3 = Math.floor(Math.random() * capsArray.length)
            password = password + capsArray[pass3]
        } 
        else {
        var pass4 = Math.floor(Math.random() * symbolArray.length)
            password = password + symbolArray[pass4]
        }
        showPass.innerHTML = password
    }
};*/
function generate() {
    var password = ""
    for(var i = 0; i < 10; i++) { 
    if(caps.checked) {
        var pass3 = Math.floor(Math.random() * capsArray.length)
            password = password + capsArray[pass3]
    } 
    if (lowCase.checked) {
        var pass2 = Math.floor(Math.random() * alphabetArray.length)
            password = password + alphabetArray[pass2]
    }
    if(numbers.checked) {
        var pass = Math.floor(Math.random() * numArray.length)
            password = password + numArray[pass]
    }
    if(symbols.checked) {
        var pass4 = Math.floor(Math.random() * symbolArray.length)
            password = password + symbolArray[pass4]
    } 
    showPass.innerHTML = password
  }
}
