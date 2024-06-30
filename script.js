let balance = 10000;  // Initial balance for demonstration

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        displayMessage(`Deposited: $${amount.toFixed(2)}`);
    } else {
        displayMessage('Invalid deposit amount.');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && balance >= amount) {
        balance -= amount;
        displayMessage(`Withdrew: $${amount.toFixed(2)}`);
    } else {
        displayMessage('Invalid withdrawal amount or insufficient funds.');
    }
}

function checkBalance() {
    displayMessage(`Current balance: $${balance.toFixed(2)}`);
}

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}
