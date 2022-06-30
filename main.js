const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

const divResult = document.querySelector('.result');
const numberFinal = document.createElement('p');

const btnCalcular = document.querySelector('button');

function soma(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function Clear(){    
    clearRadioGroup("operations");
}

function clearRadioGroup(operation){
    var ele = document.getElementsByName(operation);
    for(var i = 0; i < ele.length; i++){
        ele[i].checked = false;
    }
}

btnCalcular.onclick = function(){
    var num1 = Number(number1.value);
    var num2 = Number(number2.value);

    const operation = document.querySelector('input[name="operations"]:checked').value;

    if (operation === 'add'){
        numberFinal.textContent = soma(num1, num2);
        divResult.appendChild(numberFinal);
    } else if (operation === 'subtract'){
        numberFinal.textContent = sub(num1, num2);
        divResult.appendChild(numberFinal);
    } else if (operation === 'multiply'){
        numberFinal.textContent = mult(num1, num2);
        divResult.appendChild(numberFinal);
    } else if (operation === 'divide'){
        numberFinal.textContent = div(num1, num2);
        divResult.appendChild(numberFinal);
    }

}

const main = document.querySelector('main');

const btnReset = document.createElement('button')
btnReset.textContent = 'Reset';

main.appendChild(btnReset);

btnReset.onclick = function(){
    number1.value = '';
    number2.value = '';
    numberFinal.textContent = '';
    Clear();
}
