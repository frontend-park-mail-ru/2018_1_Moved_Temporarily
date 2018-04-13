/**
 * designService
 * This module is designed to provide additional functionality for easier page decoration
 */

'use strict';

import Http from "./Http/http.js";

class Services
{
    static getLeaders()
    {
        return Http.FetchGet("/api/user/score");
    }

    static getAboutText()
    {
        return Http.FetchGet("/api/about");
    }

    static isValidEmail(text)
    {
        let reg = /[0-9A-Za-z\-\_]+@[A-Za-z\-\_]+\.[A-Za-z\-\_]+/; // RegExp for mail
        let match = text.match(reg);

        return (match != null && match[0] == text);
    }

    static checkUser(email, pwd)
    {
        return Http.FetchPost("/api/user/login", {"email": email, "password": pwd});
    }

    static registerUser(email, login, pwd)
    {
        return Http.FetchPost("/api/user/signup", {"login": login, "email": email, "password": pwd});
    }

    static getUser()
    {
        return Http.FetchGet("/api/user/info");
    }

    static logoutUser()
    {
        return Http.FetchDelete("/api/user/logout");
    }
}

export default Services;
