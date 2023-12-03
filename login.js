const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
    res.send(`<form action='/login' method='POST' onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
        <input type ='text' name ='username' id='username'>
        <button type ='submit'>Submit</button>
    </form>`)
})
router.post('/login', (req, res, next) => {
    console.log(req.body.username);
    res.redirect('/message');
})
module.exports = router;