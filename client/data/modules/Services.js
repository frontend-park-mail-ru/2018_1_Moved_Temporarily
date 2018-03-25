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

    static getUser() {
        return http.fetchGet("/api/user/info")
    }

    static isValidMail(text)
    {
        let reg = /[0-9A-Za-z\-\_]+@[A-Za-z\-\_]+\.[A-Za-z\-\_]+/; // RegExp for mail
        let match = text.match(reg);

        return (match !== null && match[0] === text);
    }

    static checkUser(email, pwd)
    {
        return Http.fetchPost("/api/user/login", {"email": email, "password": pwd});
    }

    static register(email, login, pwd)
    {
        return Http.FetchPost("/api/user/signup", {"login": login, "email": email, "password": pwd});
    }
}

export default Services;
