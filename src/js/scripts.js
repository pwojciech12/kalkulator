var ekran = document.getElementById('ekran');
var number1 = 0;
var number2 = 0;
var action = '';

var memory = document.getElementById('memory');
var buttonOpen = document.getElementById('button-open');
var buttonClose = document.getElementById('button-close');

buttonOpen.addEventListener('click', function () {
    var calculator = document.querySelector('.kalkulator');
    buttonOpen.style = 'display: none';
    buttonClose.style = 'display: block';
    calculator.style = 'display: block';
});
buttonClose.addEventListener('click',function () {
var calculator = document.querySelector('.kalkulator');
buttonClose.style = 'display: none';
buttonOpen.style = 'display: block';
calculator.style = 'display: none';
})




function czytaj(val) {
    ekran.innerText = ekran.innerText + val;
}

function wyczysc_ekran() {
    ekran.innerText = '';
    memory.innerText = '';

    var ekran_memory = document.getElementById('ekran_memory');
    onChangeColor(ekran_memory, 'rebeccapurple', 'text-align: right;');
}

function add() {
    number1 = ekran.innerText;
    action = 'add';
    ekran.innerText = '';
    memory.innerText = number1 + '+';
}

function subtract() {
    number1 = ekran.innerText;
    action = 'subtract';
    ekran.innerText = '';
    memory.innerText = number1 + '-';
}

function multiplication() {
    number1 = ekran.innerText;
    action = 'multiplication';
    ekran.innerText = '';
    memory.innerText = number1 + '*';
}
function division() {
    number1 = ekran.innerText;
    action='division';
    ekran.innerText='';
    memory.innerText= number1 + '\/';
}



function result() {
    number2 = ekran.innerText;

    if (action == 'add') {
        ekran.innerText = parseInt(number1) + parseInt(number2);
    }

    if (action == 'subtract') {
        ekran.innerText = parseInt(number1) - parseInt(number2);
    }

    if (action =='division') {
        if (number2 == '0') {
            ekran.innerText='Nie dziel przez zero!';
        } else {
            ekran.innerText = parseInt(number1) / parseInt(number2);
        }
    }

    if (action == 'multiplication') {
        ekran.innerText = parseInt(number1) * parseInt(number2);
    }

    memory.innerText = memory.innerText + number2;
    var ekran_memory = document.getElementById('ekran_memory');
    onChangeColor(ekran_memory, 'yellow', 'text-align: right;');
}


function onChangeColor(element, color, css) {

    if(css === undefined) {
        css = "";
    }

    element.style = "background-color: " + color + ";" + css;
}


