// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.roundrect.3.radii.2.dompoint
// Description:Verify that when three radii are given to roundRect(), the second radius, specified as a DOMPoint, applies to the top-right and bottom-left corners.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Verify that when three radii are given to roundRect(), the second radius, specified as a DOMPoint, applies to the top-right and bottom-left corners.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.roundRect(0, 0, 100, 50, [0, new DOMPoint(40, 20), 0]);
ctx.fillStyle = '#0f0';
ctx.fill();

// top-right corner
_assertPixel(canvas, 79,1, 255,0,0,255, "79,1", "255,0,0,255");
_assertPixel(canvas, 58,1, 0,255,0,255, "58,1", "0,255,0,255");
_assertPixel(canvas, 98,10, 255,0,0,255, "98,10", "255,0,0,255");
_assertPixel(canvas, 98,21, 0,255,0,255, "98,21", "0,255,0,255");

// bottom-left corner
_assertPixel(canvas, 20,48, 255,0,0,255, "20,48", "255,0,0,255");
_assertPixel(canvas, 41,48, 0,255,0,255, "41,48", "0,255,0,255");
_assertPixel(canvas, 1,39, 255,0,0,255, "1,39", "255,0,0,255");
_assertPixel(canvas, 1,28, 0,255,0,255, "1,28", "0,255,0,255");

// other corners
_assertPixel(canvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(canvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
t.done();

});
done();
