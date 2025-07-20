// If you're feeling stuck, you can look at solution/hint.js, but after looking, don't copy
// Try understanding each line and try again, only look up one line at a time

// Get DOM elements
const quoteInput = document.getElementById('quoteInput');
const authorInput = document.getElementById('authorInput');
const submitBtn = document.getElementById('submitQuote');
const loadBtn = document.getElementById('loadQuotes');
const container = document.getElementById('quotesContainer');

// TODO: Add event listener to submitBtn
// When clicked:
//   - Get quote and author from inputs
//   - Send POST request using axios to backend
//   - Clear input fields
//   - Optional: alert success/failure

// TODO: Add event listener to loadBtn
// When clicked:
//   - Send GET request to backend using axios
//   - For each quote in response:
//       - Create a div (with class 'quote-card')
//       - Add quote text and author inside
//       - Append to quotesContainer
