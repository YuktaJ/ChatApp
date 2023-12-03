const express = require("express");
const app = express();
const loginRouter = require('./routes/login');
const messagesRouter = require('./routes/messages');
app.use(express.urlencoded({ extended: false }));

app.use(loginRouter);
app.use(messagesRouter);
app.listen(3000);