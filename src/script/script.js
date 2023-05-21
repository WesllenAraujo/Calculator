function soma() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var resultado = document.getElementById('text');
    
    resultado.innerHTML = parseInt(number1) + parseInt(number2); 
}

function subtracao() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var resultado = document.getElementById('text');
    
    resultado.innerHTML = parseInt(number1) - parseInt(number2); 
}

function multiplicacao() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var resultado = document.getElementById('text');
    
    resultado.innerHTML = parseInt(number1) * parseInt(number2); 
}

function divisao() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var resultado = document.getElementById('text');
    
    resultado.innerHTML = parseInt(number1) / parseInt(number2); 
}