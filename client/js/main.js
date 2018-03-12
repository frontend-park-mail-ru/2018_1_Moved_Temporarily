
const http = document.Http;
const Services = document.Services;

function prepareProfileBlock() {
    document.profileBlock = new document.ProfileBlock(document.body, "profileBlock", "User Profile", "profileTitle");
    document.profileBlock.changeUser();
}

function preparePlayMenu() {
    document.playMenu = new document.PlayMenu(document.body);
    document.playMenu.hide();
}

function prepareProfileMenu() {
    document.profileMenu = new document.ProfileMenu(document.body);
    document.profileMenu.hide();
}

function prepareLoginMenu() {
    const loginMenu = new document.LoginMenu(document.body, "menuContainer", "Login", "menuTitle",
        document.playMenu, "menuItem", "form");

    let emailForm = loginMenu.form.createInput("centerContainer", "text", "inputIdle",
        "", "", "E-Mail: ", "errorMessage", "");
    loginMenu.form.appendNewLine();

    let password = loginMenu.form.createInput("centerContainer", "password", "inputIdle",
        "", "", "Password: ", "errorMessage", "");
    loginMenu.form.appendNewLine();

    let formError = loginMenu.form.createFormError();

    loginMenu.form.createSubmit("centerContainer", "submit", "Login", () => {
        let wasError = false;

        emailForm.error.text = password.error.text = formError.text = "";
        if (emailForm.input.element.value === "") {
            emailForm.error.text = "email field should not be empty!";
            wasError = true;
        }
        else if (!isValidMail(emailForm.input.element.value)) {
            emailForm.error.text = "incorrect email!";
            wasError = true;
        }
        if (password.input.element.value === "") {
            password.error.text = "Password field should not be empty!";
            wasError = true;
        }

        if (wasError) {
            return false;
        }
        else {
            Services.serverCheck(
                {email: emailForm.input.element.value, password: password.input.element.value}
            ).then(
                (response) => {
                    Services.changeUser(
                        {login: emailForm.input.element.value, password: password.input.element.value}
                    );
                }
            ).catch(
                (response) => {
                    formError.text = response.body.error;
                }
            )
        }
    });

    loginMenu.hide();
    document.login = loginMenu;
}

function prepareRegisterMenu() {
    const LoginMenu = document.LoginMenu;

    let registerMenu = new LoginMenu(document.body, "menuContainer", "Register", "menuTitle",
        document.mainMenu, "menuItem", "form");
    let login = registerMenu.form.createInput("centerContainer", "text", "inputIdle", "",
    "", "login: ", "errorMessage", "");
    registerMenu.form.appendNewLine();
    let email = registerMenu.form.createInput("centerContainer", "text", "inputIdle", "",
    "", "EMail: ", "errorMessage", "");
    registerMenu.form.appendNewLine();
    let password = registerMenu.form.createInput("centerContainer", "password", "inputIdle", "",
    "", "Password: ", "errorMessage", "");
    registerMenu.form.appendNewLine();
    let confirmPassword = registerMenu.form.createInput("centerContainer", "password", "inputIdle", "",
    "", "Confirm Password", "errorMessage", "");
    registerMenu.form.appendNewLine();
    let formError = registerMenu.form.createFormError();

    registerMenu.form.createSubmit("centerContainer", "submit", "Register", () => {
        login.error.text = email.error.text = password.error.text = confirmPassword.error.text = formError.text = "";
        let wasError = false;

        if(login.input.element.value === "") {
            login.error.text = "login should not be empty!";
            wasError = true;
        }
        if(email.input.element.value === "") {
            email.error.text = "email should not be empty!";
            wasError = true;
        }
        else if(!isValidMail(email.input.element.value)) {
            email.error.text = "incorrect email!";
            wasError = true;
        }
        if(password.input.element.value === "") {
            password.error.text = "password should not be empty!";
            wasError = true;
        }
        if(confirmPassword.input.element.value !== password.input.element.value) {
            confirmPassword.error.text = "false password duplicating";
            wasError = true;
        }

        if (wasError) {
            return false;
        } else {
            Services.checkRegister({
                    email: email.input.element.value,
                    login: login.input.element.value, password: password.input.element.value
                }
            ).then(
                (response) => {
                    Services.changeUser({login: login.input.element.value});
                }
            ).catch((response) => {
                formError.text = response.error;
            });
        }
    });

    registerMenu.hide();
    document.register = registerMenu;
}

function prepareLeaderboard() {
    const TemplateMenu = document.TemplateMenu;

    let leaderboard = new TemplateMenu(document.body, "menuContainer", "Leaderboard", "menuTitle",
        document.mainMenu, "menuItem");

    leaderboard.innerHolder.className = "tableHolder";
    leaderboard.onShow =
        () => {
            Services.getLeaders().then((response) => {
                leaderboard.innerHolder.innerHTML = leaderboardTemplate({players: response});
            })
        };
    leaderboard.hide();

    document.leaderboardMenu = leaderboard;
}

function prepareAbout() {
    const TemplateMenu = document.TemplateMenu;

    let about = new TemplateMenu(document.body, "menuContainer", "About", "menuTitle",
        document.mainMenu, "menuItem");

    about.onShow = (() => {
        Services.getAboutText().then((response) => {
            about.innerHolder.innerHTML = aboutTemplate(response)
        })
    });
    about.hide();

    document.aboutMenu = about;
}

function isValidMail(text) {
    let reg = /[0-9A-Za-z\-\_]+@[A-Za-z\-\_]+\.[A-Za-z\-\_]+/; // RegExp for email
    let match = text.match(reg);

    return match != null && match[0] === text;
}

prepareProfileBlock();
preparePlayMenu();
prepareProfileMenu();
prepareLoginMenu();
prepareRegisterMenu();
prepareLeaderboard();
prepareAbout();

//document.Http.BaseUrl = `${window.location.protocol}//${window.location.host}`;

document.Http.BaseUrl = "https://moved-temporarily-back.herokuapp.com";