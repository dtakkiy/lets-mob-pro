import Lru from '../code/lru';

describe('lru unit test', () => {
  it('インスタンスを生成', () => {
    expect(new Lru([])).toBeInstanceOf(Lru);
  });

  it('cacheの操作', () => {
    const lruCache = new Lru([]);
    lruCache.put('A');
    lruCache.put('B');
    expect(lruCache.getCache()).toStrictEqual(['A', 'B']);

    lruCache.put('C');
    expect(lruCache.getCache()).toStrictEqual(['B', 'C']);
  });
});
