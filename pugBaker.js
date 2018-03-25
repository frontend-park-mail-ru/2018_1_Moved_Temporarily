const fs = require("fs");
const pug = require("pug");
const path = require("path");
const DATA = path.resolve("./client/data/");

console.log("Baking...");

function bake(path, fileName, functionName, jsName)
{
    let fullPath = DATA + path;
    let templateFunc = pug.compileFileClient(fullPath + fileName, {name: functionName});
    fs.writeFileSync(fullPath + jsName, templateFunc);
}

bake("/modules/views/MainMenuView/", "MainMenuView.pug", "generateMainMenuView", "MainMenuViewTemplate.js");
bake("/modules/views/AboutMenuView/", "AboutMenuView.pug", "generateAboutMenuView", "AboutMenuViewTemplate.js");
bake("/modules/views/LeaderboardView/", "LeaderboardView.pug", "generateLeaderboardView", "LeaderboardViewTemplate.js");
bake("/modules/views/StartGameMenuView/", "StartGameMenuView.pug",
    "generateStartGameMenuView", "StartGameMenuViewTemplate.js");
bake("/modules/views/LoginMenuView/", "LoginMenuView.pug", "generateLoginMenuView", "LoginMenuViewTemplate.js");
bake("/modules/views/RegisterMenuView/", "RegisterMenuView.pug",
    "generateRegisterMenuView", "RegisterMenuViewTemplate.js");
bake("/modules/views/UserProfileBlockView/", "UserProfileBlockView.pug",
    "generateUserProfileBlockView", "UserProfileBlockViewTemplate.js");

console.log("Baked!");

/*const fs = require("fs");
const pug = require("pug");
const path = require("path");
const DATA = path.resolve("./client/data/");

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

const PROFILE = DATA + "/modules/menus/profile_menu/";
let profileFunc = pug.compileFileClient(PROFILE + "Profile.pug", {name: "ProfileTemplate"});
fs.writeFileSync(PROFILE + "ProfileTemplate.js", profileFunc);

console.log("Baked!");*/
