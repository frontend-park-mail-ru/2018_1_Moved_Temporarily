"use strict";
import BaseView from "../BaseView/BaseView.js";

const mainMenu = new BaseView(document.body, generateMainMenuView,
    {
        title: "Main Menu",
        menus:
            [
                {name: "Start Game", id: "/startGame"},
                {name: "Scoreboard", id: "/scoreboard"},
                {name: "Profile", id: "/profile"},
                {name: "About", id: "/about"},
            ]
    });

export default mainMenu;
