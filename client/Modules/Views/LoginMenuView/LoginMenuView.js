"use strict";

import BaseView from "../BaseView/BaseView.js";

const loginMenuView = new BaseView(document.body, generateLoginMenuView, {title: "Login"});

export default loginMenuView;
