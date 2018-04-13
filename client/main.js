"use strict";
import MenuManager from "./Modules/MenuManager.js";
import EventBus from "./Modules/EventBus.js";

import {createFirstGameScene, createSecoundGameScene} from "./Game/CreateGame.js"; // нужна только create_game1

const eventBus = new EventBus();
const menuManager = new MenuManager();
eventBus.subscribe(menuManager);

navigator.serviceWorker.register("./ServiceWorker.js", {scope: "/"})
    .catch((err) => {console.log("Service worker error: " + err)});

window.onpopstate = menuManager.go.bind(menuManager);



