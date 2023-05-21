function calculateResults(section) {
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
  