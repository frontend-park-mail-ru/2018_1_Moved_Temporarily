/**
 * Leaderboard Module - Leaderboard menu stuff
 * @module Leaderboard
 */

(function()
{
    const TemplateMenu = document.TemplateMenu;

    class Leaderboard extends TemplateMenu
    {
        onShow()
        {
            //this.innerHolder.innerHTML = leaderboardTemplate({players: document.Services.getLeaders()});
            let answer = document.Services.getLeaders();
            alert(answer);
            alert(1);
            console.log("start");
            console.log(answer);
            console.log("stop");
            this.innerHolder.innerHTML = leaderboardTemplate({players: document.Services.getLeaders()});
            /*document.getElementById("scoreboardNext").addEventListener("click", () => {
                //console.log("message");
                //alert("message");
                this.innerHolder.innerHTML = leaderboardTemplate({players: document.Services.getLeaders()});
            })*/
            //this.c("next", "", ()=>{});
            //this.appendNewLine();
        }
    }

    let leaderboard = new Leaderboard(document.body, "menuContainer", "Leaderboard", "menuTitle",
        document.mainMenu, "menuItem");
    leaderboard.innerHolder.className = "tableHolder";

    leaderboard.hide();
    document.Leaderboard = Leaderboard;
    document.leaderboardMenu = leaderboard;
})();
