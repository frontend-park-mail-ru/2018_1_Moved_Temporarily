"use strict";

import BaseController from "./BaseController.js";
import Services from "../Services.js";
import Button from "../Blocks/Button/Button.js"
import Widget from "../Blocks/Widget.js"

class ProfileMenuController extends BaseController {
    constructor(view) {
        super(view);

        this.title = "Profile";
        this.url = "/profile";
    }

    onShow() {
        this.view.changeData({title: "Profile", data: {avatarLink: "", login: "init"}});
        Services.getUser()
            .then(result =>
            {
                this.deleteBackButton();
                this.view.changeData({title: "Profile", data: result});
                this.createBackButton();
            })
            .catch(error =>
            {
                this.deleteBackButton();
                this.view.changeData({title: "Profile", data: {
                    avatarLink: "../../Resources/avatar.jpg",
                    login: "error", email: "error", score: 0}});
                this.createBackButton();
            });
    }
}
export default ProfileMenuController;