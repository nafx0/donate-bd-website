document.getElementById('transaction-btn').addEventListener('click',
    function(event) {
        document.getElementById('donation-cards').classList.add('hidden')
        document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')
        document.getElementById('transaction-cards').classList.remove('hidden')
        document.getElementById('transaction-btn').classList.add('bg-[#B4F461]')
    }
)
document.getElementById('donation-btn').addEventListener('click',
    function(event) {
        document.getElementById('donation-cards').classList.remove('hidden')
        document.getElementById('transaction-btn').classList.remove('bg-[#B4F461]')
        document.getElementById('donation-btn').classList.add('bg-[#B4F461]')
    }
)
const now = new Date();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const nowTime =  now.toLocaleString('en-GB');
