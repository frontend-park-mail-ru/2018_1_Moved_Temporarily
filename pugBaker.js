const fs = require("fs");
const pug = require("pug");
const path = require("path");
const DATA = path.resolve("./client/");

console.log("Baking...");

function bake(path, fileName, functionName, jsName)
{
    let fullPath = DATA + path;
    let templateFunc = pug.compileFileClient(fullPath + fileName, {name: functionName});
    fs.writeFileSync(fullPath + jsName, templateFunc);
}

bake("/Modules/Views/MainMenuView/", "MainMenuView.pug", "generateMainMenuView", "MainMenuViewTemplate.js");
bake("/Modules/Views/AboutMenuView/", "AboutMenuView.pug", "generateAboutMenuView", "AboutMenuViewTemplate.js");
bake("/Modules/Views/ScoreboardView/", "ScoreboardView.pug", "generateScoreboardView", "ScoreboardViewTemplate.js");
bake("/Modules/Views/StartGameMenuView/", "StartGameMenuView.pug",
                                          "generateStartGameMenuView", "StartGameMenuViewTemplate.js");
bake("/Modules/Views/LoginMenuView/", "LoginMenuView.pug", "generateLoginMenuView", "LoginMenuViewTemplate.js");
bake("/Modules/Views/RegisterMenuView/", "RegisterMenuView.pug",
                                         "generateRegisterMenuView", "RegisterMenuViewTemplate.js");
bake("/Modules/Views/UserProfileBlockView/", "UserProfileBlockView.pug",
                                         "generateUserProfileBlockView", "UserProfileBlockViewTemplate.js");

console.log("Baked!");
