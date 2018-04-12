"use strict";

import BaseController from "./BaseController.js";
import Services from "../Services.js";
import Button from "../Blocks/Button/Button.js"
import Widget from "../Blocks/Widget.js"

class ScoreboardController extends BaseController
{
    constructor(view)
    {
        super(view);

        this.title = "Scoreboard";
        this.url = "/scoreboard";
        this.createNextButton();
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

    goNextHandler()
    {
        alert('3');
        debugger;
        //eventBus.emitEvent({type: "goBack"});
    }

    deleteNextButton()
    {
        this.scoreboardButton.removeEventHandler("click", this.goNextHandler);
        delete this.scoreboardButton;
    }

    createNextButton()
    {
        this.view.element.childNodes.forEach((item) =>
        {
            if(item.dataset.id === "scoreboardNext")
            {
                this.scoreboardButton = new Button(item);
                this.scoreboardButton.addEventHandler("click", this.goNextHandler);

            }
        });
    }
}

export default ScoreboardController;
