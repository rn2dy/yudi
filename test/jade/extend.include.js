function template(locals) {
var jade_debug = [{ lineno: 1, filename: "test/jade/extend.include.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_t, annoying, complicated, course, interpolations, javascript, link, onlyVar, strings) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "test/jade/layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/layout.jade" });
buf.push("\n<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("this is a layout")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "test/jade/extend.include.jade" });
jade_debug.unshift({ lineno: 4, filename: "test/jade/extend.include.jade" });
buf.push("\n<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("this is the blocks content")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 0, filename: "test/jade/extend.include.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/header.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/header.jade" });
buf.push("\n<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "test/jade/header.jade" });
buf.push("\n  <title>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("this is a title")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</header>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "test/jade/attr.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/attr.jade" });
buf.push("\n<button" + (jade.attr("data-default-message", _t("Change Password"), true, false)) + (jade.attr("data-inflight-message", _t("Changing..."), true, false)) + (jade.attr("data-success-message", _t("Changed!"), true, false)) + " disabled=\"disabled\" class=\"btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("Change Password")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "test/jade/attr.jade" });
buf.push("\n<div" + (jade.attr("data-default-message", _t("Change Password"), true, false)) + (jade.attr("data-inflight-message", _t("Changing..."), true, false)) + (jade.attr("data-success-message", _t("Changed!"), true, false)) + " disabled=\"disabled\" class=\"btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "test/jade/attr.jade" });
buf.push("" + (jade.escape((jade_interp = _t("Change Password")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "test/jade/attr.jade" });
buf.push("\n<attrtest" + (jade.attr("data-default-message", _t("this should be wrapped and recorded 1"), true, false)) + (jade.attr("data-inflight-message", _t("this should be wrapped and recorded 2"), true, false)) + (jade.attr("data-success-message", _t("this should be wrapped and recorded 3"), true, false)) + (jade.attr("data-form-error", _t('this should be wrapped and recorded 4'), true, false)) + (jade.attr("data-form-correct", _t('this should be wrapped and recorded 5'), true, false)) + (jade.attr("data-tooltip", _t('this should be wrapped and recorded 6'), true, false)) + (jade.attr("placeholder", _t('this should be wrapped and recorded 7'), true, false)) + " title=\"this should not be wrapped\" type=\"this should not be wrapped\" name=\"this should not be wrapped\" id=\"this should not be wrapped\" style=\"this should not be wrapped\" class=\"this should not be wrapped\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</attrtest>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "test/jade/attr.jade" });
buf.push("\n<input type=\"text\" title=\"Your Email Address\" id=\"reset-email\"" + (jade.attr("placeholder", _t("Your Email Address"), true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "test/jade/attr.jade" });
buf.push("\n<input type=\"text\" title=\"Your Email Address\" id=\"reset-email\"" + (jade.attr("placeholder", _t("Your Email Address"), true, false)) + " class=\"coursera-reset-input\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "test/jade/attr.jade" });
buf.push("<a" + (jade.attr("placeholder", _t("some " + (link) + ". this should be ignored"), true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "test/jade/attr.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("testing")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "test/jade/attr.jade" });
buf.push("" + (jade.escape((jade_interp = _t("pipes")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "test/jade/code.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/code.jade" });
var str1 = _t('str1')
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "test/jade/code.jade" });
var str2 = _t("str2")
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "test/jade/code.jade" });
var str3 = str1 || _t('"str3"')
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "test/jade/code.jade" });
var str4 = str2 && _t("'str4'")
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "test/jade/code.jade" });
var strMap = {a: _t('a'), b: _t('b'), c: _t('c')}
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "test/jade/code.jade" });
var strArr = [_t('Lorem ipsum dolor elit'), _t('Quo studio Aristophanem?'), _t("Magni enim leges, sed legibus partam")]
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "test/jade/code.jade" });
var ignore = 'this should not be include'
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "test/jade/comment.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/comment.jade" });
buf.push("\n<!--");
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("p test html comment text")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("\n-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "test/jade/comment.jade" });
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "test/jade/complex.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/complex.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "test/jade/complex.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("testing")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "test/jade/complex.jade" });
buf.push("" + (jade.escape((jade_interp = _t("really")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "test/jade/complex.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("annoying")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "test/jade/complex.jade" });
buf.push("" + (jade.escape((jade_interp = _t("pipes")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "test/jade/complex.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("with #{annoying}", {"annoying":_t(annoying)})) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "test/jade/complex.jade" });
buf.push("" + (jade.escape((jade_interp = _t("interpolations annoying")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "test/jade/complex.jade" });
buf.push("<a" + (jade.attr("title", course.get('signatureTrackStatus')['signature_track_duration_left'], true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("#{course.get('signatureTrackStatus')['signature_track_duration_left']} left", {"course.get('signatureTrackStatus')['signature_track_duration_left']":_t(course.get('signatureTrackStatus')['signature_track_duration_left'])})) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "test/jade/simple.jade" });
jade_debug.unshift({ lineno: 1, filename: "test/jade/simple.jade" });
buf.push("\n<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("simple string detection")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("strings with #{interpolations}", {"interpolations":_t(interpolations)})) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("#{strings} with multiple #{interpolations}", {"strings":_t(strings), "interpolations":_t(interpolations)})) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("strings with #{javascript.code()}", {"javascript.code()":_t(javascript.code())})) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t("strings with #{complicated + javascript.code(\"with quoted strings\")}", {"complicated + javascript.code(\"with quoted strings\")":_t(complicated + javascript.code("with quoted strings"))})) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = _t(onlyVar)) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("123");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("!!!");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("$100");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = _t("&nbsp; look! there's a trailing space")) == null ? '' : jade_interp)) + " ");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = _t("&nbsp; look! there's more space")) == null ? '' : jade_interp)) + "  ");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = _t("&nbsp; look! there's a trailing space&nbsp;")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "test/jade/simple.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("" + (((jade_interp = _t("&nbsp; look! there's more space&nbsp;&nbsp;")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();}.call(this,"_t" in locals_for_with?locals_for_with._t:typeof _t!=="undefined"?_t:undefined,"annoying" in locals_for_with?locals_for_with.annoying:typeof annoying!=="undefined"?annoying:undefined,"complicated" in locals_for_with?locals_for_with.complicated:typeof complicated!=="undefined"?complicated:undefined,"course" in locals_for_with?locals_for_with.course:typeof course!=="undefined"?course:undefined,"interpolations" in locals_for_with?locals_for_with.interpolations:typeof interpolations!=="undefined"?interpolations:undefined,"javascript" in locals_for_with?locals_for_with.javascript:typeof javascript!=="undefined"?javascript:undefined,"link" in locals_for_with?locals_for_with.link:typeof link!=="undefined"?link:undefined,"onlyVar" in locals_for_with?locals_for_with.onlyVar:typeof onlyVar!=="undefined"?onlyVar:undefined,"strings" in locals_for_with?locals_for_with.strings:typeof strings!=="undefined"?strings:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends layout\n\nblock content\n  p this is the blocks content\n  include includes.jade\n");
}
}