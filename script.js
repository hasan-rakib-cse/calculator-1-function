let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // for storing result
let arr = Array.from(buttons); //buttton gulo nea 1ta array banea debe.

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            if((string).includes('.')) {
                string = eval(string).toFixed(2);
                input.value = string;
            }
            else {
                string = eval(string);
                input.value = string;
            }
        }
        else if(e.target.innerHTML == 'AC') {
            string = ''
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.toString().slice(0, -1)
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});