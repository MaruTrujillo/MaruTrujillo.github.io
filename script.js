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

function calculateResults(section) {
  // Get the containers within the specified section
  const containers = document.querySelectorAll(`#${section} .container`);

  // Initialize the section result variable
  let sectionResult = 0;

  // Iterate over each container
  containers.forEach(container => {
    // Get the input boxes within the current container
    const inputBoxes = container.querySelectorAll('input[type="text"]');

    // Initialize the container result variable
    let result = 0;

    // Calculate the container result
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
    if (resultText) {
      resultText.textContent = result;
    }

    // Add the container result to the section result
    sectionResult += result;
  });

  // Update the total result text for the section
  const totalResultText = document.querySelector(`.${section}-total .result-text`);
  if (totalResultText) {
    totalResultText.textContent = sectionResult;
  }

  // Calculate the total for Online and Freezer
  const onlineContainers = document.querySelectorAll('#On-line .container');
  const freezerContainers = document.querySelectorAll('#Freezer .container');
  let onlineResult = 0;
  let freezerResult = 0;

  // Calculate the Online result
  onlineContainers.forEach(container => {
    const inputBoxes = container.querySelectorAll('input[type="text"]');
    let result = 0;
    inputBoxes.forEach(inputBox => {
      const value = parseInt(inputBox.value);
      if (!isNaN(value)) {
        const label = inputBox.nextElementSibling.innerText;
        const multiplier = parseInt(label.substring(1));
        result += value * multiplier;
      }
    });
    onlineResult += result;
  });

  // Calculate the Freezer result
  freezerContainers.forEach(container => {
    const inputBoxes = container.querySelectorAll('input[type="text"]');
    let result = 0;
    inputBoxes.forEach(inputBox => {
      const value = parseInt(inputBox.value);
      if (!isNaN(value)) {
        const label = inputBox.nextElementSibling.innerText;
        const multiplier = parseInt(label.substring(1));
        result += value * multiplier;
      }
    });
    freezerResult += result;
  });

  // Update the total result text for Online and Freezer
  const onlineTotalResultText = document.querySelector('.On-line-total .result-text');
  const freezerTotalResultText = document.querySelector('.Freezer-total .result-text');
  if (onlineTotalResultText && freezerTotalResultText) {
    const onlineFreezerTotalResult = onlineResult + freezerResult;
    onlineTotalResultText.textContent = onlineResult;
    freezerTotalResultText.textContent = freezerResult;
  }
}



