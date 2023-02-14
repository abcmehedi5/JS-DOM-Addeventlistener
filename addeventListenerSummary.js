const makeClicks = document.getElementById("Makeclick");
makeClicks.addEventListener("click", function makeColorChange() {
  document.body.style.backgroundColor = "blue";
});

//  change text

function handleText() {
  document.getElementById("text").innerText = "change text";
}

// antoher option input text
document.getElementById("update").addEventListener("click", function () {
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value;
  const defultTexts = document.getElementById("defultText");
  defultTexts.innerText = inputValue;
  inputField.value =''
});
