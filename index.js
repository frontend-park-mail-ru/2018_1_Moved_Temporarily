const express = require("express");
const path = require("path");
const body = require('body-parser');
const cors = require('cors');
const cookie = require('cookie-parser');
const uuid = require('uuid/v4');
const url = require('url');
const debug = require('debug');
const logger = debug('mylogger');

const app = express();
const client = path.resolve("./client/js"); // Where to get files from?

app.use(express.static(client));
app.use(body.json());
app.use(cookie());

const port = process.env.PORT || 4000;

const ids = {};
const users = {
    'a.ostapenko@corp.mail.ru': {
        email: 'a.ostapenko@corp.mail.ru',
        nickname : 'aost',
        password: 'password',
        score: 7
    },
    'd.dorofeev@corp.mail.ru': {
        email: 'd.dorofeev@corp.mail.ru',
        nickname : 'ddor',
        password: 'password',
        score: 100500
    },
    'a.udalov@corp.mail.ru': {
        email: 'a.udalov@corp.mail.ru',
        nickname : 'auda',
        password: 'password',
        score: 72
    },
    'marina.titova@corp.mail.ru': {
        email: 'marina.titova@corp.mail.ru',
        nickname : 'mtit',
        password: 'password',
        score: 720
    },
    'atyuldyukov@mail.ru': {
        email: 'atyuldyukov@mail.ru',
        nickname : 'atyu',
        password: 'password',
        score: 7200
    },
    'user@user.ru' : {
        email: 'user@user.ru' ,
        nickname: 'user',
        password: 'user',
        score: 1500
    }
};

const aboutText = {text: ["Greatest game ever", "302"]};

const allowedOrigins = [
    'localhost',
    'https://moved-temporarily-back.herokuapp.com',
    'https://moved-temporarily-front.herokuapp.com',
    '//moved-temporarily-front.herokuapp.com',
];

const CORS_HEADERS = {
    requestedHeaders: 'Access-Control-Request-Headers'.toLowerCase(),
    requestedMethod: 'Access-Control-Request-Method'.toLowerCase(),

    allowOrigin: 'Access-Control-Allow-Origin'.toLowerCase(),
    allowMethods: 'Access-Control-Allow-Methods'.toLowerCase(),
    allowHeaders: 'Access-Control-Allow-Headers'.toLowerCase(),
    allowCredentials: 'Access-Control-Allow-Credentials'.toLowerCase(),
};

app.use(function (req, res, next) {
    const requestOrigin = req.headers['origin'];
    //console.log(req.headers);
    console.log(requestOrigin);

    if (typeof requestOrigin !== 'undefined') {
        const requestOriginHostname = url.parse(requestOrigin).hostname;


        const requestedHeaders = req.headers[CORS_HEADERS.requestedHeaders];
        const requestedMethod = req.headers[CORS_HEADERS.requestedMethod];
        logger(`Requested ${req.method} ${req.path} with origin ${requestOrigin} (${requestOriginHostname})`, {
            requestedHeaders,
            requestedMethod,
        });

        const headers = [];
        if (requestedHeaders) {
            headers.push([CORS_HEADERS.allowHeaders, requestedHeaders]);
        }
        if (requestedMethod) {
            headers.push([CORS_HEADERS.allowMethods, 'GET, POST, OPTIONS']);
        }

        // res.setHeader(CORS_HEADERS.allowOrigin, '*');

        if (allowedOrigins.includes(requestOriginHostname)) {
            headers.push([CORS_HEADERS.allowOrigin, requestOrigin]);
            headers.push([CORS_HEADERS.allowCredentials, 'true']);
        }

        const result = headers.map(pair => '\t' + pair.join(': ')).join('\n');
        logger(`Response with headers:\n` + result);

        headers.forEach(([name, value]) => res.setHeader(name, value));
    }
    next();
});

app.post("/login", function(request, response) {
    console.log('login');
    let password = request.body.password;
    let email = request.body.email;

    console.log(password);
    console.log(email);
    console.log(!isValidMail(email));
    console.log("\n\n");

    if(!password || !email || !isValidMail(email)) {
        console.log('WHaT THE HELL');
        return response.status(400).json({error: "invalid authentication data!"});
    }

    if(!users[email] || users[email].password !== password) {
        console.log('ala');
        return response.status(400).json({error: "undefined user!"});
    }
    const id = uuid();
    ids[id] = email;

    response.status(201);
    response.cookie("seal", id, {expires: new Date(Date.now() + 1000*60*15)});
    response.json({id: id});
});

app.post("/register", function (request, response)
{
    console.log('start');
    const nickname = request.body.nickname;
    const email = request.body.email;
    const password = request.body.password;

    console.log(password, email, nickname, email);
    if (!password || !email || !nickname || !isValidMail(email)) {
        return response.status(400).json({error: 'invalid registration data!'});
    }
    if (users[nickname]) {
        return response.status(400).json({error: 'email is already used!'});
    }
    const id = uuid();
    const user = {email : email, nickname: nickname, password: password, score: 0};
    ids[id] = email;
    users[email] = user;


    response.status(201);
    response.cookie("seal", id, {expires: new Date(Date.now() + 1000 * 60 * 15)});
    response.json({id: id});
});

app.get("/leaderboard", function (request, response)
{
    const scorelist = Object.values(users).sort(
        (x, y) => y.score - x.score).map(
            user => {
                return {email: user.email, nickname: user.nickname, score: user.score}
                    }
            );

    response.status(201);
    response.json(scorelist);
});

app.get("/user", function (request, response)
{
    const id = request.cookies["seal"];
    const email = ids[id];
    if (!email || !users[email])
        return response.status(401).end();

    response.status(201);
    response.json(users[email]);
});

app.get("/about", function(request, response)
{
   response.status(201);
   response.json(aboutText);
});

app.get("/profile", function(request, response)
{
    let id = request.cookies["seal"];
    if(request.cookies === undefined || !ids[id])
        response.status(400).json({error: "Player not found!"});
    else
        response.status(201).json({nickname: users[ids[id]].nickname});
});

app.get("/", function(request, response)
{
    let indexFile = client + "index.html";
    response.sendFile(indexFile);
});

app.listen(port);
console.log("pognale! " + port);


function isValidMail(text)
{
    /*let reg = /[0-9A-Za-z\-\_]+@[A-Za-z\-\_]+\.[A-Za-z\-\_]+/; // RegExp for mail
    let match = text.match(reg);

    if(match != null && match[0] == text)
        return true;
    */
    return true;
}
