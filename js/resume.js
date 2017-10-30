window.onload = function() {
	scroll_shou();
	scroll_jieshao();
	scroll_zuoping();
	scroll_lianxi();
};
function scroll_shou() {
	var scroll_offset = $("#shou").offset();
	$("body,html").animate({
		scrollTop:scroll_offset.top-100 },100);
	};
function scroll_jieshao() { 
	var scroll_offset = $("#jieshao").offset();
	$("body,html").animate({
		scrollTop:scroll_offset.top-100 },100);
	};
function scroll_zuoping() {
	var scroll_offset = $("#zuoping").offset();
	$("body,html").animate({
		scrollTop:scroll_offset.top-100 },100);
	};
function scroll_lianxi() { 
	var scroll_offset = $("#lianxi").offset();
	$("body,html").animate({
		scrollTop:scroll_offset.top },100);
	};
