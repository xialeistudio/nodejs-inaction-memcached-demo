import * as Memcached from 'memcached';

const location = 'localhost:11211';

const memcached = new Memcached(location);

console.time('写入缓存test');
memcached.set('test', Date.now(), 60, (e, result) => {
    if (e) {
        console.error('写入缓存test失败', e);
        return;
    }
    console.timeEnd('写入缓存test');
    console.log(result);
    memcached.end();
});