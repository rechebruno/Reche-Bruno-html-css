var operandoA;
var operandoB;
var operacion;

function init() {
  var display = document.getElementById('display');
  var btn0 = document.getElementById('btn0');
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('btn4');
  var btn5 = document.getElementById('btn5');
  var btn6 = document.getElementById('btn6');
  var btn7 = document.getElementById('btn7');
  var btn8 = document.getElementById('btn8');
  var btn9 = document.getElementById('btn9');
  var btnDot = document.getElementById('btnDot');
  var btnAdd = document.getElementById('btnAdd');
  var btnSub = document.getElementById('btnSub');
  var btnMul = document.getElementById('btnMul');
  var btnDiv = document.getElementById('btnDiv');
  var btnEquals = document.getElementById('btnEquals');

  btn0.onclick = function () {
    display.textContent += '0';
  };
  btn1.onclick = function () {
    display.textContent += '1';
  };
  btn2.onclick = function () {
    display.textContent += '2';
  };
  btn3.onclick = function () {
    display.textContent += '3';
  };
  btn4.onclick = function () {
    display.textContent += '4';
  };
  btn5.onclick = function () {
    display.textContent += '5';
  };
  btn6.onclick = function () {
    display.textContent += '6';
  };
  btn7.onclick = function () {
    display.textContent += '7';
  };
  btn8.onclick = function () {
    display.textContent += '8';
  };
  btn9.onclick = function () {
    display.textContent += '9';
  };
  btnDot.onclick = function () {
    display.textContent += '.';
  };
  btnAdd.onclick = function () {
    operandoA = display.textContent;
    operacion = '+';
    limpiar();
  };
  btnSub.onclick = function () {
    operandoA = display.textContent;
    operacion = '-';
    limpiar();
  };
  btnMul.onclick = function () {
    operandoA = display.textContent;
    operacion = '*';
    limpiar();
  };
  btnDiv.onclick = function () {
    operandoA = display.textContent;
    operacion = '/';
    limpiar();
  };
  btnEquals.onclick = function () {
    operandoB = display.textContent;
    resolver();
  };
}

function limpiar() {
  display.textContent = '';
}

function resetear() {
  display.textContent = '';
  operandoA = 0;
  operandoB = 0;
  operacion = '';
}

function resolver() {
  var resultado = 0;
  switch (operacion) {
    case '+':
      resultado = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case '-':
      resultado = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case '*':
      resultado = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case '/':
      resultado = parseFloat(operandoA) / parseFloat(operandoB);
      break;
  }
  resetear();
  display.textContent = resultado;
}

window.onload = init;