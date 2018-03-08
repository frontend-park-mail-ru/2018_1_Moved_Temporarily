/**
 * Profile Module - Profile settings and all this stuff
 */
;

(function()
{
    const MenuContainer = document.MenuContainer;

    class ProfileMenu extends MenuContainer
    {
        constructor(parent = document.body)
        {
            super(parent, "profileMenu", "this is your profile", "menuTitle", document.mainMenu, "menuItem");
        }

        onShow()
        {
            if(document.currentUser === null)
                document.Services.changeMenu(document.profileEntry);
        }
    }

    document.ProfileMenu = ProfileMenu;
})();
