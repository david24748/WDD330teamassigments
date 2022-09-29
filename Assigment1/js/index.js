/* requirment 1*/
function Buttomfunction() {
    const userinput = document.getElementById('buttom').value;
    const result = document.getElementById('Output');
    result.innerHTML = 'You entered: ' + userinput;
  }

/* requirment 2*/
  function sumbuttom() {
    const userinput = document.getElementById('buttominput').value;
    const result = document.getElementById('Outcomenumtwo');
    const inputt = parseInt(userinput);
    if (inputt !== NaN) {
        result.innerHTML = 'total: ' + sum(inputt);
    }
  }
  function sum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
      total += i;
    }
    return total;
  }

/* requirment 3*/
  function add() {
    const numberone = document.getElementById('buttominputthree').value;
    const numbertwo = document.getElementById('numbertwoo').value;
    const Result = document.getElementById('Buttonthreee');
    const floatnumber = parseFloat(numberone);
    const floatnumber2 = parseFloat(numbertwo);
    if ((floatnumber !== NaN) & (floatnumber2 !== NaN)) {
      const total = floatnumber + floatnumber2;
      Result.innerHTML = 'Total: ' + total;
    }
  }


/* Challenge*/
  function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
      return numberFloat;
    } else return 0;
  }
  function updateTotal(value) {
    const result = document.getElementById('result');
    result.innerHTML = 'Total: ' + value;
  }
  // function declaration
  function add2(num1, num2) {
    return num1 + num2;
  }
  // function expression
  const sub2 = function(num1, num2) {
    return num1 - num2;
  };
  // arrow function
  const mult2 = (num1, num2) => num1 * num2;

  // example of using a callback to pull it all together
  function performOperation(operation) {
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
      getNum('firstnumber'),
      getNum('secondnumber')
    );
    updateTotal(total);
  }
