// onclick start------------------------

// make red
const makeRed = document.getElementById("red");
makeRed.onclick = redColor;

function redColor() {
  document.body.style.backgroundColor = "red";
}

// make blue
const makeBlue = document.getElementById("blue");
makeBlue.onclick = blueColor;
function blueColor() {
  console.log("mehedi");
  document.body.style.backgroundColor = "blue";
}

// Option 2
const makeBlues = document.getElementById("anotherBlue");
makeBlues.onclick = function blueColor() {
  document.body.style.backgroundColor = "orange";
};

// option 3-----

const MakePink = document.getElementById("pink");
MakePink.addEventListener("click", function makePink() {
  document.body.style.backgroundColor = "pink";
});

// Option 3 and final
document.getElementById("green").
  addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
  });

// onclick end------------------------
