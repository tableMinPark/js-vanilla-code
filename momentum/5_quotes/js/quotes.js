const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do not love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
];

const quote = document.querySelector("#quote span:first-child");    // id : quote 인 element 에서 span 인 첫번째 element
const author = document.querySelector("#quote span:last-child");    // id : quote 인 element 에서 span 인 마지막 element

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];      // floor() : 버림, ceil() : 올림, round() : 반올림
                                                                            // 0 ~ 10 랜덤한 수 생성 = Math.floor(Math.random() * 10));
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;