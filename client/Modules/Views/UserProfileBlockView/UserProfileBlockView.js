"use strict";

import BaseView from "../BaseView/BaseView.js";

const userProfileBlockView = new BaseView(document.body, generateUserProfileBlockView,
    {
        loggedIn: false,
        email: null,
    }, "profileBlock");

export default userProfileBlockView;
