// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:initial.reset.gradient
// Description:Resetting the canvas state does not invalidate any existing gradients
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Resetting the canvas state does not invalidate any existing gradients");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

canvas.width = 50;
var g = ctx.createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, '#0f0');
g.addColorStop(1, '#0f0');
canvas.width = 100;
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
