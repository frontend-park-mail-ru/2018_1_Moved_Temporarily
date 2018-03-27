"use strict";

import BaseController from "./BaseController.js";
import Input from "../Blocks/Input/Input.js";
import Services from "../Services.js";
import EventBus from "../EventBus.js";

const eventBus = new EventBus();

class RegisterMenuController extends BaseController
{
    constructor(view)
    {
        super(view);

        this.inputEmail = new Input(null, document.registerForm.registerEmailInput,
            document.getElementById("registerEmailError"));
        this.inputLogin = new Input(null, document.registerForm.registerLoginInput,
            document.getElementById("registerLoginError"));
        this.inputPassword = new Input(null, document.registerForm.registerPasswordInput,
            document.getElementById("registerPasswordError"));
        this.inputRepeatPassword = new Input(null, document.registerForm.registerRepeatPasswordInput,
            document.getElementById("registerRepeatPasswordError"));
        document.registerForm.onsubmit = () => this.submitHandler();
        this.title = "Register";
        this.url = "/startGame/register";
    }

    onShow()
    {
        this.clearInput();
        this.clearErrorInput();
    }

    clearInput()
    {
        this.inputEmail.clear();
        this.inputLogin.clear();
        this.inputPassword.clear();
        this.inputRepeatPassword.clear();
    }

    clearErrorInput()
    {
        this.inputEmail.clearError();
        this.inputLogin.clearError();
        this.inputPassword.clearError();
        this.inputRepeatPassword.clearError();
    }

    submitHandler()
    {
        if(this.validate()) {
            Services.registerUser(this.inputEmail.value, this.inputLogin.value, this.inputPassword.value)
                .then(response => {
                    eventBus.emitEvent({type: "updateUser"});
                    eventBus.emitEvent({type: "goBack"});
                })
                .catch(error => {
                    console.log(error);
                });
        }
        return false;
    }

    validate()
    {
        this.clearErrorInput();

        let email = this.inputEmail.value;
        let login = this.inputLogin.value;
        let pwd = this.inputPassword.value;
        let reppwd = this.inputRepeatPassword.value;
        let bValid = true;

        if(email === "")
        {
            this.inputEmail.error = "Email is required!";
            bValid = false;
        }
        else if(!Services.isValidEmail(email))
        {
            this.inputEmail.error = "Invalid email!";
            bValid = false;
        }

        if(login === "")
        {
            this.inputLogin.error = "Login is required!";
            bValid = false;
        }
        if(pwd === "")
        {
            this.inputPassword.error = "Password is required!";
            bValid = false;
        }
        if(reppwd === "")
        {
            this.inputRepeatPassword.error = "Repeat Password is required";
            bValid = false;
        }

        if(pwd !== reppwd)
        {
            this.inputRepeatPassword.error = "Repeat Password and Password are different!";
            bValid = false;
        }

        return bValid;
    }

}

export default RegisterMenuController;
