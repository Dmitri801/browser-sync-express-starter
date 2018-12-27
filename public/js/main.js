const fileInput = document.querySelector("input[type='file']");
const fileInputTxt = document.querySelector(".validate");
const uploadForm = document.querySelector(".upload-form");
const topLine = document.getElementById("top-line");
const bottomLine = document.getElementById("bottom-line");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const fileReader = new FileReader();

(function() {
  resetBtn.style.display = "none";
})();

fileInput.addEventListener("change", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const file = fileInput.files[0];
  const newImg = new Image();
  fileReader.readAsDataURL(file);
  fileReader.onload = function(e) {
    bFile = e.target.result;
    newImg.src = bFile;
    newImg.onload = function() {
      ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
    };
    resetBtn.style.display = "block";
  };
});

submitBtn.addEventListener("click", () => {
  const top = topLine.value;
  const bottom = bottomLine.value;

  generateTopText(top);
  generateBottomText(bottom);
});

resetBtn.addEventListener("click", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fileInputTxt.value = "";
  resetBtn.style.display = "none";
  topLine.value = "";
  bottomLine.value = "";

  bottomLine.blur();
});

function generateTopText(value) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#000";
  ctx.font = "36pt impact";
  ctx.lineWidth = 3;
  ctx.textAlign = "center";
  ctx.fillText(value, canvas.width / 2, 40);

  ctx.strokeText(value, canvas.width / 2, 40);
}

function generateBottomText(value) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#000";
  ctx.font = "36pt impact";
  ctx.lineWidth = 3;
  ctx.textAlign = "center";
  ctx.fillText(value, canvas.width / 2, canvas.height - 10);

  ctx.strokeText(value, canvas.width / 2, canvas.height - 10);
}
