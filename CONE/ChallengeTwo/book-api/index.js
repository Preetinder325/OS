const express = require('express');
const app = express();
const books = [
    { id: 1, title: "Who will cry when you die", author: "Robin Sharma" },
    { id: 2, title: "The Monk who sold his ferrari", author: "Robin Sharma" },
    { id: 3, title: "The Secret", author: "Rhonda Byrne" },
    { id: 4, title: "Be Water my Friend" , author: "Bruce Lee"}
];
app.get('/api/books', (req, res) => {
    res.json(books);
});
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book is not found !!!!');
    res.json(book);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the port -> ${PORT}`);
});
