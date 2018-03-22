/**
 * designService
 * This module is designed to provide additional functionality for easier page decoration
 * @module Services
 */

import http from "./http/http.js";

class Services {
    static placeItem(element) {
        element.style.left = (Math.random() * 100) + "%";
        element.style.top = (Math.random() * 100) + "%";
        element.style.position = "absolute";
    }

    static changeMenu(newMenu) {
        document.currentMenu.hide();
        document.currentMenu = newMenu;
        newMenu.show();

    }

    static logout() {
        document.currentUser = null;
        http.fetchGet("/api/user/logout").then((response) => {
        });
    }

    static serverCheck(body) {
        return http.fetchPost("/api/user/login", body);
    }

    static changeUser(user) {
        http.fetchGet("/api/user/info")
            .then((response) => {
                document.currentUser = response;
                Services.changeMenu(document.mainMenu);
                document.profileBlock.changeUser(response);
            })
            .catch((response) => {
                document.currentUser = null;
            });
    }

    static checkRegister(body) {
        return http.fetchPost("/api/user/signup", body);
    }

    static getLeaders() {
        return http.fetchGet("/api/user/score");
    }

    static getAboutText() {
        return http.fetchGet("/api/user/about");
    }
}
