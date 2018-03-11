/**
 * Profile Module - Profile settings and all this stuff
 * @module ProfileModule
 */
;

(function()
{
    const TemplateMenu = document.TemplateMenu;

    class ProfileMenu extends TemplateMenu
    {
        constructor(parent = document.body)
        {
            super(parent, "profileMenu", "this is your profile", "menuTitle", document.mainMenu, "menuItem");
        }

        onShow()
        {
            if(document.currentUser === null) {
                document.Services.changeMenu(document.profileEntry);
            }
            else {
                //this.createItem("load photo", "menuItem", () => {});
                this.innerHolder.innerHTML = ProfileTemplate();
            }
        }
    }

    document.ProfileMenu = ProfileMenu;
})();
