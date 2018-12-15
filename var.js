var matrix = [];
// var matrix = [
//     [0,0,4,0,0],
//     [0,0,0,0,0],
//     [0,4,0,0,5],
//     [0,0,4,0,0]
// ];
var X = 40;
var Y = 20;
var SI = 10;
var xoter = [];
var mltXoter = 0;
var xotakerner = [];
var mltXotaker = 0;
var gishatichner = [];
var mltGishatich = 0;
var kaycakner = [];
var mltKaycakner = 0;
var hakakaycakner = [];
var mlthakakaycak = 0;
var exanak = 0;
var statica = 0;
var arr_obj = [];
var time = 0;
module.exports = {
	matrix:matrix,
	X	: X,
	Y	: Y,
	SI	: SI,
	xoter	: xoter,
	mltXoter	: mltXoter,
	xotakerner	: xotakerner,
	mltXotaker	: mltXotaker,
	gishatichner	: gishatichner,
	mltGishatich	: mltGishatich,
	kaycakner	: kaycakner,
	mltKaycakner	: mltKaycakner,
	hakakaycakner	: hakakaycakner,
	mlthakakaycak	: mlthakakaycak,
	exanak:exanak,
	statica:statica,
	arr_obj:arr_obj,
	time:time
};
global.random = function(arr){
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}