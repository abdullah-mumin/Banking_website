
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //cLEAR INPUT FIELD
    inputField.value = '';

    return amountValue;
}

function updateField(updateInput, amount) {
    const inputElement = document.getElementById(updateInput);
    const inputElementText = inputElement.innerText;
    const newInputAmount = parseFloat(inputElementText)
    const inputTotal = amount + newInputAmount;
    inputElement.innerText = inputTotal;
}

function getCurrentBalance() {
    const balanceInput = document.getElementById('balance-input');
    const balanceInputText = balanceInput.innerText;
    const balanceTotal = parseFloat(balanceInputText);
    return balanceTotal;
}

function updateBalance(depositAmount, isAddition) {
    const balanceInput = document.getElementById('balance-input');
    // const balanceInputText = balanceInput.innerText;
    // const balanceTotal = parseFloat(balanceInputText);
    const balanceTotal = getCurrentBalance();
    if (isAddition == true) {
        const newBalanceTotal = balanceTotal + depositAmount;
        balanceInput.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = balanceTotal - depositAmount;
        balanceInput.innerText = newBalanceTotal;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositAmount = document.getElementById('deposit-amount');
    // const depositAmountText = depositAmount.value;
    // const newDepositAmount = parseFloat(depositAmountText);

    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.innerText;
    // const newDepositInput = parseFloat(depositInputText)
    // const depositTotal = depositAmount + newDepositInput;
    // depositInput.innerText = depositTotal;

    // const balanceInput = document.getElementById('balance-input');
    // const balanceInputText = balanceInput.innerText;
    // const balanceTotal = parseFloat(balanceInputText);
    // const newBalanceTotal = balanceTotal + depositAmount;
    // balanceInput.innerText = newBalanceTotal;
    const depositAmount = getInputValue('deposit-amount');
    if (depositAmount > 0) {
        updateField('deposit-input', depositAmount)
        updateBalance(depositAmount, true)
    }

});

document.getElementById('withdrow-button').addEventListener('click', function () {
    // const withdrowAmount = document.getElementById('withdrow-amount');
    // const withdrowAmountText = withdrowAmount.value;
    // const newWithdrowAmount = parseFloat(withdrowAmountText);

    // const withdrowInput = document.getElementById('withdrow-input');
    // const withdrowInputText = withdrowInput.innerText;
    // const newWithdrowInput = parseFloat(withdrowInputText);
    // const withdrowTotal = newWithdrowInput + withdrowAmount;
    // withdrowInput.innerText = withdrowTotal;

    // const balanceInput = document.getElementById('balance-input');
    // const balanceInputText = balanceInput.innerText;
    // const balanceTotal = parseFloat(balanceInputText);
    // const newBalanceTotal = balanceTotal - withdrowAmount;
    // balanceInput.innerText = newBalanceTotal;
    const withdrowAmount = getInputValue('withdrow-amount');
    const currentBalance = getCurrentBalance();
    if (withdrowAmount > 0 && withdrowAmount < currentBalance) {
        updateField('withdrow-input', withdrowAmount)
        updateBalance(withdrowAmount, false)
    }
    if (withdrowAmount > currentBalance) {
        console.log('Insufficient Balance');
    }

});