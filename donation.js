const noakhaliFund = getInputTextById('noakhali-fund');
const feniFund = getInputTextById('feni-fund');
const studentFund = getInputTextById('quota-protest-fund');
const totAmount = getInputTextById('tot-amount');
document.getElementById('noakhali-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const noakhaliFundDonated = getInputValueById('noakhali-fund-donated');
    const noakhaliAmount = document.getElementById('noakhali-fund').innerText;
    const noakhaliAmountNum = parseFloat(noakhaliAmount);
    const newNoakhaliAmount = noakhaliFundDonated + noakhaliAmountNum;
    document.getElementById('noakhali-fund').innerText = newNoakhaliAmount;
    console.log('ss')
})