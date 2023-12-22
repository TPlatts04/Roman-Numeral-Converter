const convertButton = document.getElementById('convert-btn').addEventListener('click', () => {
  const outputDiv = document.getElementById('output');
  const inputValue = document.getElementById('number').value;
  let newValue = Number(inputValue)
  let numeralStr = "";
  const numeralObj = {
    M:	1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1
  }
  
  for (var i in numeralObj){
    while (newValue >= numeralObj[i]){
      numeralStr += i
      newValue -= numeralObj[i]
    }
  }

  
  if (inputValue === ""){
    outputDiv.style.display = "flex";
    outputDiv.innerHTML = `<p id="output-text">Please enter a valid number</p>`
    outputDiv.style.backgroundColor = "rgb(59,59,79)"
    outputDiv.style.borderColor = "white"
    const outputText = document.getElementById('output-text');
    outputText.style.fontSize = "30px"
    outputText.style.color = "white"
    outputText.style.fontFamily = "monospace"
    outputText.style.margin = "0px"
  } 
  else if (Number(inputValue) >= 1 && Number(inputValue) <= 3999){
    outputDiv.style.display = "flex";
    outputDiv.innerHTML = `<p id="output-text">${numeralStr}</p>`
    outputDiv.style.backgroundColor = "rgb(59,59,79)"
    outputDiv.style.borderColor = "white"
    const outputText = document.getElementById('output-text');
    outputText.style.fontSize = "30px"
    outputText.style.color = "white"
    outputText.style.fontFamily = "monospace"
    outputText.style.margin = "0px"
  }
  else if (Number(inputValue) <= 0){
    outputDiv.style.display = "flex";
    outputDiv.innerHTML = `<p id="output-text">Please enter a number greater than or equal to 1</p>`
    outputDiv.style.backgroundColor = "rgb(255,173,173)"
    outputDiv.style.borderColor = "rgb(133, 0, 0)"
    const outputTextLow = document.getElementById('output-text');
    outputTextLow.style.fontSize = "30px"
    outputTextLow.style.color = "rgb(133, 0, 0)"
    outputTextLow.style.fontFamily = "monospace"
    outputTextLow.style.margin = "0px"
  }
  else if (Number(inputValue) >= 4000) {
    outputDiv.style.display = "flex";
    outputDiv.innerHTML = `<p id="output-text">Please enter a number less than or equal to 3999</p>`
    outputDiv.style.backgroundColor = "rgb(255,173,173)"
    outputDiv.style.borderColor = "rgb(133, 0, 0)"
    const outputTextHigh = document.getElementById('output-text');
    outputTextHigh.style.fontSize = "30px"
    outputTextHigh.style.color = "rgb(133, 0, 0)"
    outputTextHigh.style.fontFamily = "monospace"
    outputTextHigh.style.margin = "0px"
  }

});

