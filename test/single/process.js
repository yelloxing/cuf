const cuf = require('../../index');
const __ = require('@yelloxing/core.js');

__.animation(function (deep) {
    cuf.process(deep * 100);
}, 10000);