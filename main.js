let input = document.querySelector('input');
function appendToDisplay(val) {
    input.value += val;
}
function calculate() {
    try {
        if (input.value && input.value !== "Error" && !input.value.includes("Error")) 
            input.value = eval(input.value);
        else
            input.value = 'Error';
    }
    catch (error) {
        input.value = "Error";
    }   
}
function clearDisplay() {
    input.value = "";
}
function deleteLastNum() {
    if (input.value === "Error") 
        input.value = "";
    else 
        input.value = input.value.slice(0, input.value.length - 1);
}