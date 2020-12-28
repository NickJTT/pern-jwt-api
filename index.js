const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/auth', require('./routers/authRouter'));
app.use('/dashboard', require('./routers/dashBoardRouter'));

app.listen(PORT);
