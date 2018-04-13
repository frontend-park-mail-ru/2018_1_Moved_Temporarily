"use strict";

import BaseView from "../BaseView/BaseView.js";

const profileMenuView = new BaseView(document.body, generateProfileMenuView,
    {
        title: "Profile",
        data: { avatarLink: "../../Resources/avatar.jpg",
                login: "henlo",
                email: "world",
                score: 42,
        },
    }, "profileBlock");

export default profileMenuView;