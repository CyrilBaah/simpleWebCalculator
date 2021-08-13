const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', async (req, res) => {
    res.render('index');
})




const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});