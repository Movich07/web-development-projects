
// Event listener
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('dot').addEventListener('click', () => appendValue('.'));
document.getElementById('divide').addEventListener('click', () => appendValue('/'));
document.getElementById('seven').addEventListener('click', () => appendValue('7'));
document.getElementById('eight').addEventListener('click', () => appendValue('8'));
document.getElementById('nine').addEventListener('click', () => appendValue('9'));
document.getElementById('multiply').addEventListener('click', () => appendValue('*'));
document.getElementById('four').addEventListener('click', () => appendValue('4'));
document.getElementById('five').addEventListener('click', () => appendValue('5'));
document.getElementById('six').addEventListener('click', () => appendValue('6'));
document.getElementById('subtract').addEventListener('click', () => appendValue('-'));
document.getElementById('one').addEventListener('click', () => appendValue('1'));
document.getElementById('two').addEventListener('click', () => appendValue('2'));
document.getElementById('three').addEventListener('click', () => appendValue('3'));
document.getElementById('add').addEventListener('click', () => appendValue('+'));
document.getElementById('doubleZero').addEventListener('click', () => appendValue('00'));
document.getElementById('zero').addEventListener('click', () => appendValue('0'));
document.getElementById('equals').addEventListener('click', calculate);






//  display function
function clearDisplay() {
    document.calcForm.display.value = '';
}

// to delete each figure
function deleteLast() {
    document.calcForm.display.value = document.calcForm.display.value.slice(0, -1);
}

// Function to append value to the display
function appendValue(value) {
    document.calcForm.display.value += value;
}

// to evaluate the correct answer
function calculate() {
    try {
        document.calcForm.display.value = eval(document.calcForm.display.value);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Syntax Error! Please correct the expression.");
        }
    }
}

