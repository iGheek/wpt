// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.setFont.mathFont
// Description:crbug.com/1212190, make sure offscreencanvas doesn't crash with Math Font
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("crbug.com/1212190, make sure offscreencanvas doesn't crash with Math Font");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.font = "math serif";
t.done();

});
done();
