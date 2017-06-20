"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Memcached = require("memcached");
var location = 'localhost:11211';
var memcached = new Memcached(location);
console.time('读取缓存test');
memcached.get('test', function (e, result) {
    if (e) {
        console.error('读取缓存test失败', e);
        return;
    }
    console.timeEnd('读取缓存test');
    console.log(result);
    memcached.end();
});
//# sourceMappingURL=get.js.map