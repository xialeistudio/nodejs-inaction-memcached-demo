"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Memcached = require("memcached");
var location = 'localhost:11211';
var memcached = new Memcached(location);
console.time('删除缓存test');
memcached.del('test', function (e, result) {
    if (e) {
        console.error('删除缓存test失败', e);
        return;
    }
    console.timeEnd('删除缓存test');
    console.log(result);
    memcached.end();
});
//# sourceMappingURL=delete.js.map