import * as Memcached from 'memcached';

const location = 'localhost:11211';

const memcached = new Memcached(location);

console.time('读取缓存test');
memcached.get('test', (e, result) => {
    if (e) {
        console.error('读取缓存test失败', e);
        return;
    }
    console.timeEnd('读取缓存test');
    console.log(result);
    memcached.end();
});