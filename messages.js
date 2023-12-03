const express = require("express");
const fs = require('fs');
const routes = express.Router();

routes.get('/message', (req, res, next) => {

    fs.readFile('username.txt', (err, mess) => {
        if (err) {
            console.log(err);
            mess = 'No chats exists.'
        } res.send(`<h4>${mess}</h4>
        <form action='/post' method="POST" onsubmit='document.getElementById("username").value = localStorage.getItem("username")' >
            <input type='text' name='message'>
            <input type ='hidden' name='username' id='username'>
            <button type='submit'>Send</button>
        </form>`)
    });
})

routes.post("/post", (req, res, next) => {

    console.log(req.body.message);
    console.log(req.body.username);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}, `, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/message');
        }
    })
})


module.exports = routes;