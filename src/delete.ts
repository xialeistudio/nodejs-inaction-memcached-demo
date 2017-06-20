import * as Memcached from 'memcached';

const location = 'localhost:11211';

const memcached = new Memcached(location);

console.time('删除缓存test');
memcached.del('test', (e, result) => {
    if (e) {
        console.error('删除缓存test失败', e);
        return;
    }
    console.timeEnd('删除缓存test');
    console.log(result);
    memcached.end();
});