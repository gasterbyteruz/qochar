const PADDING = 16;

const card = document.getElementById("card");
const declineBtn = document.getElementById("decline");

const { height: cardHeight, width: cardWidth } =
  card.getBoundingClientRect();
const declineBtnSizes = declineBtn.getBoundingClientRect();

declineBtn.style.position = "absolute";
declineBtn.style.top = inPixels(declineBtnSizes.top);
declineBtn.style.left = inPixels(declineBtnSizes.left);

declineBtn.addEventListener(
  "mousemove",
  ({ clientX, clientY }) => {
    let [nextTop, nextLeft] = [
      getRandomNumber(
        PADDING,
        cardHeight - declineBtnSizes.height - PADDING
      ),
      getRandomNumber(
        PADDING,
        cardWidth - declineBtnSizes.width - PADDING
      ),
    ];

    declineBtn.style.left = inPixels(nextLeft);
    declineBtn.style.top = inPixels(nextTop);
  }
);

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function inPixels(number) {
  return `${number}px`;
}

function setQuestions() {
  const questionText = document.getElementById("question-text");
  const questionDescription = document.getElementById(
    "question-description"
  );

  let searchParams = new URLSearchParams(location.search);

  if (searchParams.has("qText"))
    questionText.innerText = searchParams.get("qText");
  if (searchParams.has("qDescription"))
    questionDescription.innerText =
      searchParams.get("qDescription");
}

setQuestions();
