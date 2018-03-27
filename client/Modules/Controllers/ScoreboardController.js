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
        /*
        let nextbtn = document.getElementById("scoreboardNext");
        let form = document.getElementsByName("scoreboardForm");
        form.item(0).childNodes.item(1).onclick = (evt) => {
            debugger;
            alert('1');
            console.log('1');
        };
        debugger;
        nextbtn.addEventListener("click", this.submitHandler);
        nextbtn.onclick = (evt) => {
            debugger;
            nextbtn.innerText = "new text";
            alert('1');
            console.log("1");
        };
        debugger;
        */
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

    submitHandler()
    {
        debugger;
        document.getElementById("scoreboardNext").innerText = "submit";
        alert("1");
        console.log(1);
    }

}

export default ScoreboardController;
