
const display = document.getElementById('result');
const history = document.getElementById('history');

let input1 = 0;
let input2 = 0;
let operator = "";
let isOperator = false;
let countOperator = 0;
let answer = 0;
let equal = false;

//
const numberClick = (value) => {
    //
    if(display.textContent == '0' || isOperator == true || equal == true){
        display.textContent = "";
        isOperator = false;
    }
    display.textContent += value;
};

const backspace = () => {
    const value = display.textContent.substring(0, display.textContent.length - 1);
    if (value.length == 0) {
        display.textContent = 0;
    } else {
        display.textContent = value;
    }
};

const operatorClick = (value) => {
    countOperator++;
    isOperator = true;

    if (countOperator > 1) {
        compute();
        operator = `${value}`;
        input2 = parseFloat(display.textContent);
        history.textContent += `${input2} ${operator}`;
        input1 = answer;
        display.textContent = answer;
        equal = false;
    } else {
        operator = `${value}`;
        input1 = parseFloat(display.textContent);
        history.textContent = `${input1} ${operator}`;
    }
};

const equalClick = () => {
    equal = true;

    if (countOperator == 0) {
        return;
    }

    countOperator = 0;

    compute();

    history.textContent = "";

    display.textContent = answer;
};

const compute = () => {
    input2 = parseFloat(display.textContent);

    switch (operator) {
        case '+':
            answer = input1 + input2;
            break;
        case '-':
            answer = input1 - input2;
            break;
        case '×':
            answer = input1 * input2;
            break;
        case '÷':
            answer = input1 / input2;
            break;
    }
};

const clearClick = () => {
    display.textContent = 0;
};

const clearAllClick = () => {
    display.textContent = 0;
    history.textContent = "";
    answer = 0;
    operator = "";
    countOperator = 0;
    isOperator = false;
    equal = false;
};

const dotClick = () => {
    if (isOperator == true) {
        display.textContent = '0.';
        isOperator = false;
    } else {
        display.textContent += '.';
    }
};

const changeSign = () => {
    let number = parseFloat(display.textContent);
    number = number * -1;
    display.textContent = number;
};