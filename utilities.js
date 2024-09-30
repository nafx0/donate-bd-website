function getInputValueById(id) {
    const inputValue= document.getElementById(id).value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}