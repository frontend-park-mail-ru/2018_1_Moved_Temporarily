"use strict";

import BaseController from "./BaseController.js";
import Services from "../Services.js";
import Button from "../Blocks/Button/Button.js"

class ScoreboardController extends BaseController
{
    constructor(view)
    {
        super(view);

        this.nextButton = new Button();

        this.title = "Scoreboard";
        this.url = "/scoreboard";
    }

    onShow()
    {
        this.view.changeData({title: "Scoreboard", players: []});
        Services.getLeaders()
            .then(result =>
            {
                this.deleteBackButton();
                this.view.changeData({title: "Scoreboard", players: result});
                this.createBackButton();
            })
            .catch(error =>
            {
                this.deleteBackButton();
                this.view.changeData({title: "Scoreboard", players: [error]});
                this.createBackButton();
            });
    }
}

export default ScoreboardController;
