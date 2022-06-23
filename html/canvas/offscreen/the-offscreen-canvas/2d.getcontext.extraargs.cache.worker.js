// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.getcontext.extraargs.cache
// Description:The 2D context doesn't throw with extra getContext arguments (cached)
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("The 2D context doesn't throw with extra getContext arguments (cached)");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

_assertDifferent(canvas.getContext('2d', false, {}, [], 1, "2"), null, "canvas.getContext('2d', false, {}, [], 1, \"2\")", "null");
_assertDifferent(canvas.getContext('2d', 123), null, "canvas.getContext('2d', 123)", "null");
_assertDifferent(canvas.getContext('2d', "test"), null, "canvas.getContext('2d', \"test\")", "null");
_assertDifferent(canvas.getContext('2d', undefined), null, "canvas.getContext('2d', undefined)", "null");
_assertDifferent(canvas.getContext('2d', null), null, "canvas.getContext('2d', null)", "null");
_assertDifferent(canvas.getContext('2d', Symbol.hasInstance), null, "canvas.getContext('2d', Symbol.hasInstance)", "null");
t.done();

});
done();
