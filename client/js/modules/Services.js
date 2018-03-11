/**
 * designService
 * This module is designed to provide additional functionality for easier page decoration
 * @module Services
 */
;
(function()
{
    const Http = document.Http;

    class Services
    {
        static placeItem(element)
        {
            element.style.left = (Math.random() * 100) + "%";
            element.style.top = (Math.random() * 100) + "%";
            element.style.position = "absolute";
        }

        static changeMenu(newMenu)
        {
            document.currentMenu.hide();
            document.currentMenu = newMenu;
            newMenu.show();

        }

        static logout()
        {
            document.currentUser = null;
        }

        static serverCheck(body)
        {
            return http.fetchPost("/api/user/login", body);
        }

        static changeUser(user)
        {
            http.fetchGet("/api/user/user")
                .then((response) =>
            {
                document.currentUser = response;
                Services.changeMenu(document.mainMenu);
                document.profileBlock.changeUser(response);
            })
                .catch((response) =>
            {
                document.currentUser= null;
            });
        }

        static checkRegister(body)
        {
            return http.fetchPost("/api/user/register", body);
        }

        static getLeaders()
        {
            return http.fetchGet("/api/user/score");
        }

        static getAboutText()
        {
            return http.fetchGet("/api/user/about");
        }
    }

    document.Services = Services;
})();
