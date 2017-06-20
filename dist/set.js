"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Memcached = require("memcached");
var location = 'localhost:11211';
var memcached = new Memcached(location);
console.time('写入缓存test');
memcached.set('test', Date.now(), 60, function (e, result) {
    if (e) {
        console.error('写入缓存test失败', e);
        return;
    }
    console.timeEnd('写入缓存test');
    console.log(result);
    memcached.end();
});
//# sourceMappingURL=set.js.map