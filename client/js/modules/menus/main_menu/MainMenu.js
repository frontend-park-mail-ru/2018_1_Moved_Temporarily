/**
 * Main Menu module - constructs the very first menu you see at start-up
 */
;
(function()
{
    const MenuContainer = document.MenuContainer;

    let mainMenu = new MenuContainer(document.body, "menuContainer", "Counter Strike Golang", "menuTitle");
    mainMenu.createItem("Start Game", "menuItem", () => document.Services.changeMenu(document.playMenu));
    mainMenu.createItem("Leaderboard", "menuItem", () => document.Services.changeMenu(document.leaderboardMenu));
    mainMenu.createItem("Profile", "menuItem", () => document.Services.changeMenu(document.profileMenu));
    mainMenu.createItem("About", "menuItem", () => document.Services.changeMenu(document.aboutMenu));

    document.currentMenu = document.mainMenu = mainMenu;
})();
