// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.isPointInPath.basic.2
// Description:isPointInPath() detects whether the point is inside the path
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("isPointInPath() detects whether the point is inside the path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.rect(20, 0, 20, 20);
_assertSame(ctx.isPointInPath(10, 10), false, "ctx.isPointInPath(10, 10)", "false");
_assertSame(ctx.isPointInPath(30, 10), true, "ctx.isPointInPath(30, 10)", "true");
t.done();

});
done();
