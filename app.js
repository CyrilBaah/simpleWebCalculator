const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const Calculator = require('./calculator');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/result', (req, res) => {
    const { operation, firstNumber, secondNumber } = req.body;

    
    if(operation === 'add'){
        const Cal = new Calculator(+firstNumber, +secondNumber);
        const result = Cal.add();
        res.status(200).render('result', { 
            result: result,
            firstNumber,
            secondNumber
        });
        // res.status(200).render('result', {solution: {result: outputValue}});
    }
    // }else if(operation === 'product'){
    //     const simpleCalculator = new Calculator(+firstNumber, +secondNumber);
    //     const answer = simpleCalculator.product();

    //     res.status(200).render('result', {solution: {result: outputValue}});
    // }

    // res.send('You Typed An Invalid Number');

});




const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});