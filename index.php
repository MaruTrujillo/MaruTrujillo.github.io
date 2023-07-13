<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Chicken Count</title>
</head>
<body>
  <h1>Morning</h1>
  <div class="parent-container">
    <div id="MorningchickenCount">
      <form action="" method="post">
        <div id="spicy" class="container">
          <div class="header">Spicy</div>
          <div class="counter">
            <input type="text" name="spicy_input_1" class="input-box-mor-spi" placeholder="Input 1" value="2">
            <span class="input-label">x100</span>
          </div>
          <div class="counter">
            <input type="text" name="spicy_input_2" class="input-box-mor-spi" placeholder="Input 2" value="2">
            <span class="input-label">x10</span>
          </div>
          <div class="counter">
            <input type="text" name="spicy_input_3" class="input-box-mor-spi" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $spicyInput1 = $_POST['spicy_input_1'];
                $spicyInput2 = $_POST['spicy_input_2'];
                $spicyInput3 = $_POST['spicy_input_3'];
                $spicyResult = $spicyInput1 * 100 + $spicyInput2 * 10 + $spicyInput3;
                echo $spicyResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="classic" class="container">
          <div class="header">Classic</div>
          <div class="counter">
            <input type="text" name="classic_input_1" class="input-box-mor-cla" placeholder="Input 1" value="2">
            <span class="input-label">x100</span>
          </div>
          <div class="counter">
            <input type="text" name="classic_input_2" class="input-box-mor-cla" placeholder="Input 2" value="2">
            <span class="input-label">x10</span>
          </div>
          <div class="counter">
            <input type="text" name="classic_input_3" class="input-box-mor-cla" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $classicInput1 = $_POST['classic_input_1'];
                $classicInput2 = $_POST['classic_input_2'];
                $classicInput3 = $_POST['classic_input_3'];
                $classicResult = $classicInput1 * 100 + $classicInput2 * 10 + $classicInput3;
                echo $classicResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="grill" class="container">
          <div class="header">Grill</div>
          <div class="counter">
            <input type="text" name="grill_input_1" class="input-box-mor-gril" placeholder="Input 1" value="2">
            <span class="input-label">x100</span>
          </div>
          <div class="counter">
            <input type="text" name="grill_input_2" class="input-box-mor-gril" placeholder="Input 2" value="2">
            <span class="input-label">x10</span>
          </div>
          <div class="counter">
            <input type="text" name="grill_input_3" class="input-box-mor-gril" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $grillInput1 = $_POST['grill_input_1'];
                $grillInput2 = $_POST['grill_input_2'];
                $grillInput3 = $_POST['grill_input_3'];
                $grillResult = $grillInput1 * 100 + $grillInput2 * 10 + $grillInput3;
                echo $grillResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="nug" class="container">
          <div class="header">Nuggets</div>
          <div class="counter">
            <input type="text" name="nug_input_1" class="input-box-mor-nug" placeholder="Input 1" value="2">
            <span class="input-label">x760</span>
          </div>
          <div class="counter">
            <input type="text" name="nug_input_2" class="input-box-mor-nug" placeholder="Input 2" value="2">
            <span class="input-label">x38</span>
          </div>
          <div class="counter">
            <input type="text" name="nug_input_3" class="input-box-mor-nug" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $nugInput1 = $_POST['nug_input_1'];
                $nugInput2 = $_POST['nug_input_2'];
                $nugInput3 = $_POST['nug_input_3'];
                $nuggetsResult = $nugInput1 * 760 + $nugInput2 * 38 + $nugInput3;
                echo $nuggetsResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="strips" class="container">
          <div class="header">Strips</div>
          <div class="counter">
            <input type="text" name="strips_input_1" class="input-box-mor-stri" placeholder="Input 1" value="2">
            <span class="input-label">x252</span>
          </div>
          <div class="counter">
            <input type="text" name="strips_input_2" class="input-box-mor-stri" placeholder="Input 2" value="2">
            <span class="input-label">x18</span>
          </div>
          <div class="counter">
            <input type="text" name="strips_input_3" class="input-box-mor-stri" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $stripsInput1 = $_POST['strips_input_1'];
                $stripsInput2 = $_POST['strips_input_2'];
                $stripsInput3 = $_POST['strips_input_3'];
                $stripsResult = $stripsInput1 * 252 + $stripsInput2 * 18 + $stripsInput3;
                echo $stripsResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>

        <button class="center-button" type="submit" name="calculate">Calculate</button>
      </form>
    </div>
  </div>

  <h1>Night</h1>
  <div class="parent-container">
    <div id="NightchickenCount">
      <form action="" method="post">
        <div id="spicy" class="container">
          <div class="header">Spicy</div>
          <div class="counter">
            <input type="text" name="spicy_input_1" class="input-box-nig-spi" placeholder="Input 1" value="2">
            <span class="input-label">x100</span>
          </div>
          <div class="counter">
            <input type="text" name="spicy_input_2" class="input-box-nig-spi" placeholder="Input 2" value="2">
            <span class="input-label">x10</span>
          </div>
          <div class="counter">
            <input type="text" name="spicy_input_3" class="input-box-nig-spi" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $spicyInput1 = $_POST['spicy_input_1'];
                $spicyInput2 = $_POST['spicy_input_2'];
                $spicyInput3 = $_POST['spicy_input_3'];
                $spicyResult = $spicyInput1 * 100 + $spicyInput2 * 10 + $spicyInput3;
                echo $spicyResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="classic" class="container">
          <div class="header">Classic</div>
          <div class="counter">
            <input type="text" name="classic_input_1" class="input-box-nig-cla" placeholder="Input 1" value="2">
            <span class="input-label">x100</span>
          </div>
          <div class="counter">
            <input type="text" name="classic_input_2" class="input-box-nig-cla" placeholder="Input 2" value="2">
            <span class="input-label">x10</span>
          </div>
          <div class="counter">
            <input type="text" name="classic_input_3" class="input-box-nig-cla" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $classicInput1 = $_POST['classic_input_1'];
                $classicInput2 = $_POST['classic_input_2'];
                $classicInput3 = $_POST['classic_input_3'];
                $classicResult = $classicInput1 * 100 + $classicInput2 * 10 + $classicInput3;
                echo $classicResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="grill" class="container">
          <div class="header">Grill</div>
          <div class="counter">
            <input type="text" name="grill_input_1" class="input-box-nig-gril" placeholder="Input 1" value="2">
            <span class="input-label">x100</span>
          </div>
          <div class="counter">
            <input type="text" name="grill_input_2" class="input-box-nig-gril" placeholder="Input 2" value="2">
            <span class="input-label">x10</span>
          </div>
          <div class="counter">
            <input type="text" name="grill_input_3" class="input-box-nig-gril" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $grillInput1 = $_POST['grill_input_1'];
                $grillInput2 = $_POST['grill_input_2'];
                $grillInput3 = $_POST['grill_input_3'];
                $grillResult = $grillInput1 * 100 + $grillInput2 * 10 + $grillInput3;
                echo $grillResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="nug" class="container">
          <div class="header">Nuggets</div>
          <div class="counter">
            <input type="text" name="nug_input_1" class="input-box-nig-nug" placeholder="Input 1" value="2">
            <span class="input-label">x760</span>
          </div>
          <div class="counter">
            <input type="text" name="nug_input_2" class="input-box-nig-nug" placeholder="Input 2" value="2">
            <span class="input-label">x38</span>
          </div>
          <div class="counter">
            <input type="text" name="nug_input_3" class="input-box-nig-nug" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $nugInput1 = $_POST['nug_input_1'];
                $nugInput2 = $_POST['nug_input_2'];
                $nugInput3 = $_POST['nug_input_3'];
                $nuggetsResult = $nugInput1 * 760 + $nugInput2 * 38 + $nugInput3;
                echo $nuggetsResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>
        <div id="strips" class="container">
          <div class="header">Strips</div>
          <div class="counter">
            <input type="text" name="strips_input_1" class="input-box-nig-stri" placeholder="Input 1" value="2">
            <span class="input-label">x252</span>
          </div>
          <div class="counter">
            <input type="text" name="strips_input_2" class="input-box-nig-stri" placeholder="Input 2" value="2">
            <span class="input-label">x18</span>
          </div>
          <div class="counter">
            <input type="text" name="strips_input_3" class="input-box-nig-stri" placeholder="Input 3" value="2">
            <span class="input-label">x1</span>
          </div>
          <div class="result">
            <div class="result-text">
              <?php
              if (isset($_POST['calculate'])) {
                $stripsInput1 = $_POST['strips_input_1'];
                $stripsInput2 = $_POST['strips_input_2'];
                $stripsInput3 = $_POST['strips_input_3'];
                $stripsResult = $stripsInput1 * 252 + $stripsInput2 * 18 + $stripsInput3;
                echo $stripsResult;
              }
              ?>
            </div>
            <div class="result-label">Result</div>
          </div>
        </div>

        <button class="center-button" type="submit" name="calculate">Calculate</button>
      </form>
    </div>
  </div>
</body>
</html>
