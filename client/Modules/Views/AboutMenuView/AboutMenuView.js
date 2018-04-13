"use strict";

undefined;import BaseView from "../BaseView/BaseView.js";

const aboutMenu = new BaseView(document.body, generateAboutMenuView, {title: "About", text: []});

export default aboutMenu;
