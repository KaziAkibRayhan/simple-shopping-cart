function getTextElementValueById(elementId) {
    const TotalElement = document.getElementById(elementId);
    const currentTotalString = TotalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax

    const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount)

}