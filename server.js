const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/name', (req, res) => {
  res.send('Hiwot Tadesse');
});

app.get('/hobby', (req, res) => {
  res.json({ hobby: 'cooking' });
});

app.get('/dream', (req, res) => {
  res.send('Dream big, stay focused, and never give up. Your perseverance will lead to greatness');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
