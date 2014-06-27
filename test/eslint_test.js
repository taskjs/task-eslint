'use strict';

var assert = require('assert');
var Eslint = require('../lib/eslint');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Eslint).run(
    [{
        path: __dirname + '/fixtures/foo.js'
    }], // inputs
    {}, // options
    console // logger
).then(function(inputs){
    assert(inputs)
}).catch(errorHandler)
