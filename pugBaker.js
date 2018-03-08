const fs = require("fs");
const pug = require("pug");
const path = require("path");
const DATA = path.resolve("./client/js/");

console.log("Baking...");

// leaderboard
const LEADERBOARD = DATA + "/modules/menus/leaderboard/";
let leaderboardFunc = pug.compileFileClient(LEADERBOARD + "Leaderboard.pug", {name: "leaderboardTemplate"});
fs.writeFileSync(LEADERBOARD + "LeaderboardTemplate.js", leaderboardFunc);

// about
const ABOUT = DATA + "/modules/menus/about/";
let aboutFunc = pug.compileFileClient(ABOUT
    + "About.pug", {name: "aboutTemplate"});
fs.writeFileSync(ABOUT + "AboutTemplate.js", aboutFunc);

console.log("Baked!");
