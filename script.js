
function calculateResult(section) {
  // Get the containers within the specified section
  const containers = document.querySelectorAll(`#${section} .container`);

  // Iterate over each container
  containers.forEach(container => {
    // Get the input boxes within the current container
    const inputBoxes = container.querySelectorAll('input[type="text"]');

    // Initialize the result variable
    let result = 0;

    // Calculate the result
    inputBoxes.forEach(inputBox => {
      const value = parseInt(inputBox.value);
      if (!isNaN(value)) {
        const label = inputBox.nextElementSibling.innerText;
        const multiplier = parseInt(label.substring(1));
        result += value * multiplier;
      }
    });

    // Update the result text within the current container
    const resultText = container.querySelector('.result-text');
    resultText.textContent = result;
  });
}

let onlineCalculated = false;
let freezerCalculated = false;

function calculateResults(section) {
  if (section === 'On-line') {
    onlineCalculated = true;
  } else if (section === 'Freezer') {
    freezerCalculated = true;
  }

  if (onlineCalculated && freezerCalculated) {
    showTotalResults();
  }
}

function showTotalResults() {
  // Get the container elements for both sections
  const onlineContainer = document.getElementById("On-line");
  const freezerContainer = document.getElementById("Freezer");

  // Calculate and show the results for each chicken type in the "On-line" section
  const onlineSpicyTotal = calculateTotal(onlineContainer, '.spicy.container');
  const onlineClassicTotal = calculateTotal(onlineContainer, '.classic.container');
  const onlineGrillTotal = calculateTotal(onlineContainer, '.grill.container');
  const onlineNuggetTotal = calculateTotal(onlineContainer, '.nugget.container');
  const onlineStripsTotal = calculateTotal(onlineContainer, '.strips.container');

  updateResult(onlineContainer, '.spicy.container', onlineSpicyTotal);
  updateResult(onlineContainer, '.classic.container', onlineClassicTotal);
  updateResult(onlineContainer, '.grill.container', onlineGrillTotal);
  updateResult(onlineContainer, '.nugget.container', onlineNuggetTotal);
  updateResult(onlineContainer, '.strips.container', onlineStripsTotal);

  // Calculate and show the results for each chicken type in the "Freezer" section
  const freezerSpicyTotal = calculateTotal(freezerContainer, '.spicy.container');
  const freezerClassicTotal = calculateTotal(freezerContainer, '.classic.container');
  const freezerGrillTotal = calculateTotal(freezerContainer, '.grill.container');
  const freezerNuggetTotal = calculateTotal(freezerContainer, '.nugget.container');
  const freezerStripsTotal = calculateTotal(freezerContainer, '.strips.container');

  updateResult(freezerContainer, '.spicy.container', freezerSpicyTotal);
  updateResult(freezerContainer, '.classic.container', freezerClassicTotal);
  updateResult(freezerContainer, '.grill.container', freezerGrillTotal);
  updateResult(freezerContainer, '.nugget.container', freezerNuggetTotal);
  updateResult(freezerContainer, '.strips.container', freezerStripsTotal);

  // Update the total container with the calculated totals
  const totalSpicy = document.querySelector('.total.spicy-total .result-text');
  const totalClassic = document.querySelector('.total.classic-total .result-text');
  const totalGrill = document.querySelector('.total.grill-total .result-text');
  const totalNugget = document.querySelector('.total.nugget-total .result-text');
  const totalStrips = document.querySelector('.total.strips-total .result-text');

  // Calculate the sum of totals from both sections
  const spicyTotal = onlineSpicyTotal + freezerSpicyTotal;
  const classicTotal = onlineClassicTotal + freezerClassicTotal;
  const grillTotal = onlineGrillTotal + freezerGrillTotal;
  const nuggetTotal = onlineNuggetTotal + freezerNuggetTotal;
  const stripsTotal = onlineStripsTotal + freezerStripsTotal;

  // Update the total result container with the sum of totals
  totalSpicy.textContent = spicyTotal;
  totalClassic.textContent = classicTotal;
  totalGrill.textContent = grillTotal;
  totalNugget.textContent = nuggetTotal;
  totalStrips.textContent = stripsTotal;

  // Show the total result container
  const totalResultContainer = document.querySelector('.total-result-container');
  totalResultContainer.style.display = 'block';
}

function calculateResults(section) {
  const containers = document.querySelectorAll(`#${section} .container`);

  let total = 0;

  containers.forEach((container) => {
    const inputBoxes = container.querySelectorAll('.input-box-aft');
    const resultText = container.querySelector('.result-text');
    let subTotal = 0;

    inputBoxes.forEach((inputBox) => {
      const value = parseInt(inputBox.value);
      const multiplier = parseInt(inputBox.nextElementSibling.innerText.replace('x', ''));
      subTotal += value * multiplier;
    });

    resultText.innerText = subTotal;
    total += subTotal;
  });

  showTotalResults(total);
}


function showTotalResults() {
  const totalContainers = document.querySelectorAll('.total-container .total');

  let spicyTotal = 0;
  let classicTotal = 0;
  let grillTotal = 0;
  let nuggetTotal = 0;
  let stripsTotal = 0;

  const onlineContainers = document.querySelectorAll('#On-line .container');
  onlineContainers.forEach((container) => {
    const resultText = container.querySelector('.result-text');
    const header = container.querySelector('.header').innerText;
    const inputBoxes = container.querySelectorAll('.input-box-aft');
    const inputValues = Array.from(inputBoxes).map((input) => parseInt(input.value));

    if (header === 'Spicy') {
      spicyTotal += inputValues[0] * 10 + inputValues[1] * 1;
    } else if (header === 'Classic') {
      classicTotal += inputValues[0] * 10 + inputValues[1] * 1;
    } else if (header === 'Grill') {
      grillTotal += inputValues[0] * 10 + inputValues[1] * 1;
    } else if (header === 'Nuggets') {
      nuggetTotal += inputValues[0] * 38 + inputValues[1] * 1;
    } else if (header === 'Strips') {
      stripsTotal += inputValues[0] * 18 + inputValues[1] * 1;
    }
  });

  const freezerContainers = document.querySelectorAll('#Freezer .container');
  freezerContainers.forEach((container) => {
    const resultText = container.querySelector('.result-text');
    const header = container.querySelector('.header').innerText;
    const inputBoxes = container.querySelectorAll('.input-box-aft');
    const inputValues = Array.from(inputBoxes).map((input) => parseInt(input.value));

    if (header === 'Spicy') {
      spicyTotal += inputValues[0] * 100 + inputValues[1] * 10;
    } else if (header === 'Classic') {
      classicTotal += inputValues[0] * 100 + inputValues[1] * 10;
    } else if (header === 'Grill') {
      grillTotal += inputValues[0] * 100 + inputValues[1] * 10;
    } else if (header === 'Nuggets') {
      nuggetTotal += inputValues[0] * 760 + inputValues[1] * 38;
    } else if (header === 'Strips') {
      stripsTotal += inputValues[0] * 252 + inputValues[1] * 18;
    }
  });

  totalContainers.forEach((totalContainer) => {
    const resultText = totalContainer.querySelector('.result-text');
    const header = totalContainer.querySelector('.header').innerText;

    if (header === 'Spicy') {
      resultText.innerText = spicyTotal.toFixed(2);
    } else if (header === 'Classic') {
      resultText.innerText = classicTotal.toFixed(2);
    } else if (header === 'Grill') {
      resultText.innerText = grillTotal.toFixed(2);
    } else if (header === 'Nuggets') {
      resultText.innerText = nuggetTotal.toFixed(2);
    } else if (header === 'Strips') {
      resultText.innerText = stripsTotal.toFixed(2);
    }
  });
}
