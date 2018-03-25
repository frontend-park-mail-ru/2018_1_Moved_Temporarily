"use strict";

import Subscriber from "./Subscriber.js";
import mainMenuView from "./views/MainMenuView/MainMenuView.js";
import aboutMenuView from "./views/AboutMenuView/AboutMenuView.js";
import leaderboardView from "./views/LeaderboardView/LeaderboardView.js";
import gameModeMenuView from "./views/GameModeMenuView/GameModeMenuView.js";
import loginMenuView from "./views/LoginMenuView/LoginMenuView.js";
import registerMenuView from "./views/RegisterMenuView/RegisterMenuView.js";
import userProfileBlockView from "./views/UserProfileBlockView/UserProfileBlockView.js";
import MainMenuController from "./controllers/MainMenuController.js";
import AboutMenuController from "./controllers/AboutMenuController.js";
import LeaderboardController from "./controllers/LeaderboardController.js";
import GameModeMenuController from "./controllers/GameModeMenuController.js";
import LoginMenuController from "./controllers/LoginMenuController.js";
import RegisterMenuController from "./controllers/RegisterMenuController.js";
import UserProfileBlockController from "./controllers/UserProfileBlockController.js";
import StartGameMenuSelector from "./controllers/StartGameMenuSelector.js";

class MenuManager extends Subscriber
{
    constructor()
    {
        if(MenuManager.instance)
            return MenuManager.instance;

        super();
        this.menus =
            {
                "/": new MainMenuController(mainMenuView),
                "/leaderboardMenu": new LeaderboardController(leaderboardView),
                "/aboutMenu": new AboutMenuController(aboutMenuView),
                "/startGame": new StartGameMenuSelector(),
                "/selectMode": new GameModeMenuController(gameModeMenuView),
                "/startGame/login": new LoginMenuController(loginMenuView),
                "/startGame/register": new RegisterMenuController(registerMenuView),
            };

        this.currentMenu = this.menus["/"];
        this.currentMenu.show();

        this.profileBlock = new UserProfileBlockController(userProfileBlockView);
        this.profileBlock.show();

        MenuManager.instance = this;
    }

    changeMenu(newMenuURL, bPushState = true)
    {
        this.currentMenu.hide();
        this.currentMenu = this.menus[newMenuURL];
        if(bPushState === true)
            window.history.pushState(null, this.currentMenu.title, this.currentMenu.url);
        this.currentMenu.show();
    }

    go()
    {
        this.changeMenu(window.location.pathname, false);
    }


    eventFired(event)
    {
        if(event.type === "changeMenu")
        {
            if(event.bPushState === true)
                this.changeMenu(event.newMenuName, true);
            else
                this.changeMenu(event.newMenuName);
        }
        else if(event.type === "goBack")
            window.history.back();
        else if(event.type === "updateUser")
            this.profileBlock.updateUser();
    }

    registerMenu(URL, controller)
    {
        this.menus[URL] = controller;
    }

}

export default MenuManager;