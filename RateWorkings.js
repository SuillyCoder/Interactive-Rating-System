// INDICATING SELECTED BUTTON

let selectedButton = null;

function selection(button) {
    if (selectedButton) {
        selectedButton.style.backgroundColor = '#0b468c'; // Reset the previously selected button
    }

    button.style.backgroundColor = '#092047';
    selectedButton = button;
}

let rateChoice = 0;

// RECORDING BUTTON'S RATE VALUE

function handleButtonClick(buttonNumber) {
    rateChoice = buttonNumber;
    console.log(`Rating Choice: ${rateChoice}`);
}

document.getElementById('circleOne').addEventListener('click', function () {
    handleButtonClick(1);
});

document.getElementById('circleTwo').addEventListener('click', function () {
    handleButtonClick(2);
});

document.getElementById('circleThree').addEventListener('click', function () {
    handleButtonClick(3);
});

document.getElementById('circleFour').addEventListener('click', function () {
    handleButtonClick(4);
});

document.getElementById('circleFive').addEventListener('click', function () {
    handleButtonClick(5);
});

// CHECKING FOR SELECTED BUTTON

function handleSubmitButtonClick() {
    if (rateChoice === 0) {
        alert("Please select a button before submitting.");
    } else {
        alert(`Rating Choice: ${rateChoice}. Thank you for your feedback!`);
        window.location.href = `RateDone.html?rating=${rateChoice}`;
    }
}


document.getElementById('submitButton').addEventListener('click', handleSubmitButtonClick);
