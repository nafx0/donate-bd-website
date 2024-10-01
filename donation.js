let totAmount = parseFloat(document.getElementById('tot-amount').innerText);

document.getElementById('noakhali-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const noakhaliFundDonated = parseFloat(getInputValueById('noakhali-fund-donated'));
    if (isNaN(noakhaliFundDonated) || noakhaliFundDonated <= 0) {
        alert('Invalid donation amount for Noakhali. Please enter a valid number.');
        return;
    }

    if (totAmount - noakhaliFundDonated < 0) {
        alert('Insufficient funds for this donation.');
        return;
    }

    const noakhaliAmount = parseFloat(document.getElementById('noakhali-fund').innerText);
    const newNoakhaliAmount = noakhaliFundDonated + noakhaliAmount;
    document.getElementById('noakhali-fund').innerText = newNoakhaliAmount;

    totAmount -= noakhaliFundDonated;
    document.getElementById('tot-amount').innerText = totAmount;

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-5">
        <div class="card-body">
            <h2 class="card-title py-2">${noakhaliFundDonated} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
            <p>Date: ${nowTime}</p>
        </div>
        </div>
    `;
    document.getElementById('transaction-cards').appendChild(div);
});

document.getElementById('feni-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const feniFundDonated = parseFloat(getInputValueById('feni-fund-donated'));
    if (isNaN(feniFundDonated) || feniFundDonated <= 0) {
        alert('Invalid donation amount for Feni. Please enter a valid number.');
        return;
    }

    if (totAmount - feniFundDonated < 0) {
        alert('Insufficient funds for this donation.');
        return;
    }

    const feniAmount = parseFloat(document.getElementById('feni-fund').innerText);
    const newFeniAmount = feniFundDonated + feniAmount;
    document.getElementById('feni-fund').innerText = newFeniAmount;

    totAmount -= feniFundDonated;
    document.getElementById('tot-amount').innerText = totAmount;

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-5">
        <div class="card-body">
            <h2 class="card-title py-2">${feniFundDonated} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
            <p>Date: ${nowTime}</p>
        </div>
        </div>
    `;
    document.getElementById('transaction-cards').appendChild(div);
});

document.getElementById('stduent-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const quotaFundDonated = parseFloat(getInputValueById('quota-protest-fund-donated'));
    if (isNaN(quotaFundDonated) || quotaFundDonated <= 0) {
        alert('Invalid donation amount for Quota Movement. Please enter a valid number.');
        return;
    }

    if (totAmount - quotaFundDonated < 0) {
        alert('Insufficient funds for this donation.');
        return;
    }

    const quotaAmount = parseFloat(document.getElementById('quota-protest-fund').innerText);
    const newQuotaAmount = quotaFundDonated + quotaAmount;
    document.getElementById('quota-protest-fund').innerText = newQuotaAmount;

    totAmount -= quotaFundDonated;
    document.getElementById('tot-amount').innerText = totAmount;

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-5">
        <div class="card-body">
            <h2 class="card-title py-2">${quotaFundDonated} Taka is Donated for injured in the Quota Movement</h2>
            <p>Date: ${nowTime}</p>
        </div>
        </div>
    `;
    document.getElementById('transaction-cards').appendChild(div);
});
