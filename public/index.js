const express = require('express');
const app = express();
const port = 3000;

let counter = 0

app.set('view engine', 'ejs');
app.set('views', './public/views');

app.get('/', (req, res) => {
    counter++;
    res.render('vies', { counter });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
