"use strict";

import BaseView from "../BaseView/BaseView.js";

const scoreboard = new BaseView(document.body, generateScoreboardView, {title: "Scoreboard", players: []});

export default scoreboard;
