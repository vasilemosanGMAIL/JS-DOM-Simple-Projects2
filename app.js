const button = document.getElementById("button");
const authorH1 = document.getElementById("author");
const quoteP = document.getElementById("quote");

button.addEventListener("click", runEvent);

function runEvent(e) {
  e.preventDefault();

  const authorQuotes = [
    {
      author: "- Ernest Hemingway",
      quote: "You lose it if you talk about it.",
    },
    {
      author: "- Friedrich Nietzsche",
      quote: "In Heaven, all the interesting people are missing.",
    },
    {
      author: "- Winston Churchill",
      quote: "We shape our buildings; thereafter they shape us.",
    },
    {
      author: "- Voltaire",
      quote: "The best is the enemy of the good.",
    },
    {
      author: "- Mark Twain",
      quote:
        "Everyone is a moon and has a dark side which he never shows to anybody.",
    },
  ];

  let randomNum = Math.floor(Math.random() * authorQuotes.length);
  authorH1.innerHTML = `Author: ${authorQuotes[randomNum].author}`;
  quoteP.innerHTML = `Famous Quote: ${authorQuotes[randomNum].quote}`;
}
