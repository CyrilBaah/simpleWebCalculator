const express = require('express');
const app = express();
require('dotenv').config();



app.get('/', (req, res) => {
    res.send('works')
})




const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});