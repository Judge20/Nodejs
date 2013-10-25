//HelloAssert.js
var assert = require("assert");
var a = true;
assert(a);
assert(a, "a should be truthy");
assert.ok(a, "a should be truthy");
//assert.equal(a, 10, "a should by 10");
assert.equal("10", 10);
//assert.notEqual("10", 10);
//assert.strictEqual("10", 10, "string 10 should equal to number 10");
assert.notStrictEqual("10", 10, "string 10 should not be equal to number 10");
//assert.equal({a:1}, {a:1});
var obj = {b:1, a:[1, 2, 3, 4]};
assert.deepEqual(obj, {a:[1, 2, 3, 4], b: 1});
var d1 = new Date();
var d2 = new Date();
assert.deepEqual(d1, d2);
assert.deepEqual(/a/ig, /a/gi);
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
//assert.deepEqual(ee, {});
//assert.strictEqual(Object.keys(ee).length, 0);
