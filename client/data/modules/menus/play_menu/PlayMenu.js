/**
 * Play Menu - module containing game field
 * @module PlayMenu
 */

(function()
{
    const MenuContainer = document.MenuContainer;

    class PlayMenu extends MenuContainer
    {
        constructor(parent = document.body)
        {
            super(parent, "playMenu", "war never changes", "menuTitle", document.mainMenu, "menuItem");
        }

        onShow()
        {
            if(document.currentUser === null)
                document.Services.changeMenu(document.profileEntry);
        }
    }

    document.PlayMenu = PlayMenu;
})();
