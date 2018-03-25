function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateRegisterMenuView(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (title) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FBaseMenuView\u002FBaseMenuHeader.pug";
pug_html = pug_html + "\u003CH1 class=\"viewTitle\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FBaseMenuView\u002FBaseMenuHeader.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002FH1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cform class=\"loginForm\" name=\"registerForm\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctable class=\"alignCenter\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"info\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "Mail:\u003C\u002Flabel\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cinput class=\"flatLightGray\" type=\"text\" value=\"\" name=\"registerMailInput\"\u002F\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"error\" id=\"registerMailError\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"info\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "Nickname:\u003C\u002Flabel\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cinput class=\"flatLightGray\" type=\"text\" value=\"\" name=\"registerNicknameInput\"\u002F\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"error\" id=\"registerNicknameError\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"info\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "Password:\u003C\u002Flabel\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cinput class=\"flatLightGray\" type=\"password\" value=\"\" name=\"registerPasswordInput\"\u002F\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"error\" id=\"registerPasswordError\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"info\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "Repeat Password:\u003C\u002Flabel\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cinput class=\"flatLightGray\" type=\"password\" value=\"\" name=\"registerRepeatPasswordInput\"\u002F\u003E\u003C\u002Fth\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Clabel class=\"error\" id=\"registerRepeatPasswordError\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cth colspan=\"3\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FRegisterMenuView\u002FRegisterMenuView.pug";
pug_html = pug_html + "\u003Cinput class=\"alignCenter submitButton\" type=\"submit\" value=\"Register\" name=\"registerSubmit\"\u002F\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fform\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FBaseMenuView\u002FBaseMenuFoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"button\" data-id=\"back\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fqskwx\u002FWebstormProjects\u002F2018_1_Moved_Temporarily\u002Fclient\u002Fdata\u002Fmodules\u002Fviews\u002FBaseMenuView\u002FBaseMenuFoot.pug";
pug_html = pug_html + "Back\u003C\u002Fdiv\u003E";}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}