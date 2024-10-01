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
    const newTotAmount = totAmount - noakhaliFundDonated;
    document.getElementById('tot-amount').innerText = newTotAmount;
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-5">
    <div class="card-body">
        <h2 class="card-title py-2">${noakhaliAmountNum} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
        <p>Date: ${nowTime}</p>
    </div>
    </div>
    `
    document.getElementById('transaction-cards').appendChild(div);
})
document.getElementById('feni-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const feniFundDonated = getInputValueById('feni-fund-donated');
    const feniAmount = document.getElementById('feni-fund').innerText;
    const feniAmountNum = parseFloat(feniAmount);
    const newFeniAmount = feniFundDonated + feniAmountNum;
    document.getElementById('feni-fund').innerText = newFeniAmount;
    const newTotAmount = totAmount - feniFundDonated;
    document.getElementById('tot-amount').innerText = newTotAmount;
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-5">
    <div class="card-body">
        <h2 class="card-title py-2">${feniAmountNum} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <p>Date: ${nowTime}</p>
    </div>
    </div>
    `
    document.getElementById('transaction-cards').appendChild(div);
})
document.getElementById('stduent-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const quotaFundDonated = getInputValueById('quota-protest-fund-donated');
    const quotaAmount = document.getElementById('quota-protest-fund').innerText;
    const quotaAmountNum = parseFloat(quotaAmount);
    const newQuotaAmount = quotaFundDonated + quotaAmountNum;
    document.getElementById('quota-protest-fund').innerText = newQuotaAmount;
    const newTotAmount = totAmount - quotaFundDonated;
    document.getElementById('tot-amount').innerText = newTotAmount;
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-5">
    <div class="card-body">
        <h2 class="card-title py-2">${quotaAmountNum} Taka is Donated for injured in the Quota Movement</h2>
        <p>Date: ${nowTime}</p>
    </div>
    </div>
    `
    document.getElementById('transaction-cards').appendChild(div);
})