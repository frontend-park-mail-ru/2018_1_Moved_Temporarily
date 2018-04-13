function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateUserProfileBlockView(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (email, loggedIn) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
if (loggedIn) {
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Ch3 class=\"userName\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = email) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
}
else {
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Ch3 class=\"userName\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "Please login\u003C\u002Fh3\u003E";
}
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
if (loggedIn) {
;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Ctr class=\"alignCenter\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Cth class=\"alignCenter\" colspan=\"2\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Cdiv class=\"smallButton rightMoveLogout\" id=\"logout\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "Logout\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Ctr class=\"alignCenter\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Cth class=\"alignCenter\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Cdiv class=\"smallButton alignButtons\" id=\"login\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "Login\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Cth class=\"alignCenter\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "\u003Cdiv class=\"smallButton alignButtons\" id=\"register\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002FModules\u002FViews\u002FUserProfileBlockView\u002FUserProfileBlockView.pug";
pug_html = pug_html + "Register\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";}.call(this,"email" in locals_for_with?locals_for_with.email:typeof email!=="undefined"?email:undefined,"loggedIn" in locals_for_with?locals_for_with.loggedIn:typeof loggedIn!=="undefined"?loggedIn:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}