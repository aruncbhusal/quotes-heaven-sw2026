// Get references to DOM elements
const quoteInput = document.getElementById('quoteInput');
const authorInput = document.getElementById('authorInput');
const submitBtn = document.getElementById('submitQuote');
const loadBtn = document.getElementById('loadQuotes');
const container = document.getElementById('quotesContainer');

// Handle quote submission
submitBtn.addEventListener('click', async () => {
    const quote = quoteInput.value.trim();
    const author = authorInput.value.trim();

    if (!quote || !author) {
        alert('Please enter both a quote and an author.');
        return;
    }

    try {
        await axios.post('http://localhost:8000/api/quotes', {
            quote,
            author,
        });

        quoteInput.value = '';
        authorInput.value = '';
        alert('Quote added!');
    } catch (error) {
        console.error('Error adding quote:', error);
        alert('Something went wrong while adding the quote.');
    }
});

// Handle loading quotes
loadBtn.addEventListener('click', async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/quotes');
        const quotes = response.data.quotes;

        container.innerHTML = ''; // Clear existing quotes

        quotes.forEach((q) => {
            const card = document.createElement('div');
            card.className = 'quote-card';

            const quoteText = document.createElement('div');
            quoteText.className = 'quote-text';
            quoteText.textContent = `"${q.quote}"`;

            const quoteAuthor = document.createElement('div');
            quoteAuthor.className = 'quote-author';
            quoteAuthor.textContent = `- ${q.author}`;

            card.appendChild(quoteText);
            card.appendChild(quoteAuthor);

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading quotes:', error);
        alert('Could not load quotes.');
    }
});
