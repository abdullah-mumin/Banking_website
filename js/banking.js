
function getInputValue() {
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountText = depositAmount.value;
    const newDepositAmount = parseFloat(depositAmountText);

    //cLEAR INPUT FIELD
    depositAmount.value = '';

    return newDepositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositAmount = document.getElementById('deposit-amount');
    // const depositAmountText = depositAmount.value;
    // const newDepositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();

    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.innerText;
    const newDepositInput = parseFloat(depositInputText)
    const depositTotal = depositAmount + newDepositInput;
    depositInput.innerText = depositTotal;


    const balanceInput = document.getElementById('balance-input');
    const balanceInputText = balanceInput.innerText;
    const balanceTotal = parseFloat(balanceInputText);
    const newBalanceTotal = balanceTotal + depositTotal;
    balanceInput.innerText = newBalanceTotal;




});

document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowAmount = document.getElementById('withdrow-amount');
    const withdrowAmountText = withdrowAmount.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);

    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowInputText = withdrowInput.innerText;
    const newWithdrowInput = parseFloat(withdrowInputText);
    const withdrowTotal = newWithdrowInput + newWithdrowAmount;
    withdrowInput.innerText = withdrowTotal;

    const balanceInput = document.getElementById('balance-input');
    const balanceInputText = balanceInput.innerText;
    const balanceTotal = parseFloat(balanceInputText);
    const newBalanceTotal = balanceTotal - withdrowTotal;
    balanceInput.innerText = newBalanceTotal;

    //CLEAR INPUT FIELD
    withdrowAmount.value = '';
});