const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
  { question: "What is the largest planet?", answer: "Jupiter" },
  { question: "What is the boiling point of water?", answer: "100°C or 212°F" }
];

let current = 0;
let showingAnswer = false;

function loadCard() {
  const flashcard = document.getElementById('flashcard');
  showingAnswer = false;
  flashcard.textContent = cards[current].question;
}

function showAnswer() {
  const flashcard = document.getElementById('flashcard');
  if (!showingAnswer) {
    flashcard.textContent = cards[current].answer;
    showingAnswer = true;
  } else {
    flashcard.textContent = cards[current].question;
    showingAnswer = false;
  }
}

function nextCard() {
  current = (current + 1) % cards.length;
  loadCard();
}

window.onload = loadCard;