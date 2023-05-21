function calculateResults() {
    var spicyInput1 = parseInt(document.querySelector(".input-box-mor-spi:nth-of-type(1)").value) || 0;
    var spicyInput2 = parseInt(document.querySelector(".input-box-mor-spi:nth-of-type(2)").value) || 0;
    var spicyInput3 = parseInt(document.querySelector(".input-box-mor-spi:nth-of-type(3)").value) || 0;
  
    var classicInput1 = parseInt(document.querySelector(".input-box-mor-cla:nth-of-type(1)").value) || 0;
    var classicInput2 = parseInt(document.querySelector(".input-box-mor-cla:nth-of-type(2)").value) || 0;
    var classicInput3 = parseInt(document.querySelector(".input-box-mor-cla:nth-of-type(3)").value) || 0;
  
    var grillInput1 = parseInt(document.querySelector(".input-box-mor-gril:nth-of-type(1)").value) || 0;
    var grillInput2 = parseInt(document.querySelector(".input-box-mor-gril:nth-of-type(2)").value) || 0;
    var grillInput3 = parseInt(document.querySelector(".input-box-mor-gril:nth-of-type(3)").value) || 0;
  
    var spicyResult = spicyInput1 * 100 + spicyInput2 * 10 + spicyInput3;
    var classicResult = classicInput1 * 100 + classicInput2 * 10 + classicInput3;
    var grillResult = grillInput1 * 100 + grillInput2 * 10 + grillInput3;
  
    document.querySelector(".result-text-mor-spi").textContent = spicyResult;
    document.querySelector(".result-text-mor-cla").textContent = classicResult;
    document.querySelector(".result-text-mor-gril").textContent = grillResult;
  }
  