"use strict";

import BaseController from "./BaseController.js";
import Input from "../blocks/input/input.js";
import Services from "../Services.js";
import EventBus from "../EventBus.js";

const eventBus = new EventBus();

class LoginMenuController extends BaseController
{
    constructor(view)
    {
        super(view);

        this.inputEmail = new Input(null, document.loginForm.loginEmailInput,
                                         document.getElementById("loginEmailError"));
        this.inputPassword = new Input(null, document.loginForm.loginPasswordInput,
                                             document.getElementById("loginPasswordError"));
        document.loginForm.onsubmit = () => this.submitHandler();
        this.title = "Login";
        this.url = "/startGame/login";
    }

    onShow()
    {
        this.inputEmail.clear();
        this.inputEmail.clearError();
        this.inputPassword.clear();
        this.inputPassword.clearError();
    }

    submitHandler()
    {
        if(this.validate()) {
            Services.checkUser(this.inputEmail.value, this.inputPassword.value)
                .then(response => {
                    eventBus.emitEvent({type: "updateUser"});
                    eventBus.emitEvent({type: "goBack"});
                })
                .catch(error => {
                    // Throw message box;
                });
        }
        return false;
    }

    validate()
    {
        this.inputEmail.clearError();
        this.inputPassword.clearError();

        let email = this.inputEmail.value;
        let pwd = this.inputPassword.value;
        let bValid = true;

        if(email === "")
        {
            this.inputEmail.error = "Email is required!";
            bValid = false;
        }
        if(pwd === "")
        {
            this.inputPassword.error = "Password is required!";
            bValid = false;
        }

        if(!bValid) {
            return false;
        }

        if(!Services.isValidEmail(email))
        {
            this.inputEmail.error = "Incorrect email specified!";
            return false;
        }

        return true;
    }

}

export default LoginMenuController;
