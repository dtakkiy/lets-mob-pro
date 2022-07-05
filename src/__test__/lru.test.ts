import Lru from '../code/lru';

describe('lru unit test', () => {
  it('インスタンスを生成', () => {
    expect(new Lru([])).toBeInstanceOf(Lru);
  });

  it('cacheの操作', () => {
    const lruCache = new Lru([]);
    lruCache.put('praha');
    lruCache.put('airtable');
    expect(lruCache.getCache()).toStrictEqual(['praha', 'airtable']);

    lruCache.put('matsubara');
    expect(lruCache.getCache()).toStrictEqual(['airtable', 'matsubara']);
  });
});
