const express = require("express");
const path = require("path");
const body = require('body-parser');
const cors = require('cors');
const cookie = require('cookie-parser');
const uuid = require('uuid/v4');

const app = express();
const DATA = path.resolve("./client/"); // Where to get files from?
const port = 4000;

app.use(express.static(DATA));
app.use(body.json());
app.use(cookie());

const ids = {};
const users = {
    "user@user.ru": {name: "user", password: "user", score: 0},
    "kudusov@kudusov.kudusov": {name: "Kudusov", password: "kudusov", score: 42},
    "user1@user.ru": {name: "user1", password: "user", score: 2},
    "user2@user.ru": {name: "user2", password: "user", score: 13},
    "user3@user.ru": {name: "user3", password: "user", score: 11},
    "user4@user.ru": {name: "user4", password: "user", score: 18},
    "user5@user.ru": {name: "user5", password: "user", score: 19},
    "user6@user.ru": {name: "user6", password: "user", score: 28},
    "user7@user.ru": {name: "user7", password: "user", score: 22},
    "user8@user.ru": {name: "user8", password: "user", score: 25},
    "user9@user.ru": {name: "user9", password: "user", score: 28},
    "user10@user.ru": {name: "user10", password: "user", score: 16},
    "user11@user.ru": {name: "user11", password: "user", score: 9},
    "user12@user.ru": {name: "user12", password: "user", score: 10},
    "user13@user.ru": {name: "user13", password: "user", score: 11},
    "user14@user.ru": {name: "user14", password: "user", score: 17},
    "user15@user.ru": {name: "user15", password: "user", score: 33},
    "user16@user.ru": {name: "user16", password: "user", score: 39},
    "user17@user.ru": {name: "user17", password: "user", score: 21},
    "user18@user.ru": {name: "user18", password: "user", score: 40},
    "user19@user.ru": {name: "user19", password: "user", score: 34},
    "user20@user.ru": {name: "user20", password: "user", score: 5},
    "user21@user.ru": {name: "user21", password: "user", score: 19},
    "user22@user.ru": {name: "user22", password: "user", score: 28},
    "user23@user.ru": {name: "user23", password: "user", score: 17},
    "user24@user.ru": {name: "user24", password: "user", score: 19},
    "user25@user.ru": {name: "user25", password: "user", score: 41},
};

const aboutText = {text: ["Counter strike golang", "Moved Temporarily"]};

app.post("/api/user/login", function(req, res)
{
    let password = req.body.password;
    let email = req.body.loginEmail;

    if(!password || !email || !isValidEmail(email)) {
        return res.status(400).json({error: "Invalid data!"});
    }

    if(!users[email] || users[email].password != password) {
        return res.status(400).json({error: "Email/password pair is not found"});
    }
    const id = uuid();
    ids[id] = email;

    res.status(201);
    res.cookie("Special seal", id, {expires: new Date(Date.now() + 1000*60*15)});
    res.json({login: users[email].name, email: email, password: null, score: users[email].score});
});

app.post("/api/user/users", function (req, res)
{
    const name = req.body.login;
    const email = req.body.email;
    const password = req.body.password;

    if (!password || !email || !name || !isValidEmail(email)) {
        return res.status(400).json({error: 'Invalid data!'});
    }
    if (users[name]) {
        return res.status(400).json({error: 'Email is already used!'});
    }
    const id = uuid();
    const user = {name: name, password: password, score: 0};
    ids[id] = email;
    users[email] = user;


    res.status(201);
    res.cookie("Special seal", id, {expires: new Date(Date.now() + 1000 * 60 * 15)});
    res.json({name: name, email: email, score: 0});
});

app.get("/api/user/scoreboard", function (req, res)
{
    const scorelist = Object.values(users).sort((x, y) => y.score - x.score).map(
        user => {return {email: user.email, login: user.name, score: user.score}});

    res.status(201);
    res.json(scorelist);
});

app.get("/api/user/info", function (req, res)
{
    const id = req.cookies["Special seal"];
    console.log(id);
    const mail = ids[id];
    if (!mail || !users[mail])
    {
        res.status(201);
        res.json({status: 0, response: "You are not currently logged in!"});
    }


    //let result = {login: name, score: score, email = mail} = users[ids[id]];
    let usr = users[ids[id]];
    let result = {};
    result.password = null;
    result.login = usr.name;
    result.email = ids[id];
    result.score = users[ids[id]].score;
    result.avatarLink = "henlo_my_fren";


    res.status(201);
    res.json(result);
});

app.post("/api/user/logout", function(req, res)
{
    res.cookie("Special seal", -1, {expires: new Date(Date.now() + 1000*60*15)});

    res.status(201);
    res.json({status: 0});
});

app.get("/api/user/about", function(req, res)
{
   res.status(201);
   res.json(aboutText);
});

app.get("/", function(req, res)
{
    let indexFile = DATA + "index.html";
    res.sendFile(indexFile);
});

app.listen(port);

console.log("Here we go!");


function isValidEmail(text)
{
    let reg = /[0-9A-Za-z\-\_]+@[A-Za-z\-\_]+\.[A-Za-z\-\_]+/; // RegExp for email
    let match = text.match(reg);

    if(match != null && match[0] == text)
        return true;

    return false;
}
