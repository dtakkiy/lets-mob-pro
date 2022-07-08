import FileStore from '../code/FileStore';

describe('FireStoreのテスト', () => {
  it('インスタンス化', () => {
    const f = new FileStore([]);
    expect(f).toBeInstanceOf(FileStore);
  });

  it('getのテスト', () => {
    const f = new FileStore([{ key: 'hoge', value: 'fuga' }]);
    expect(f.get('hoge')).toMatch(/fuga/);
  });

  it('setのテスト', () => {
    const f = new FileStore([]);
    expect(f.set('foo', 'hoge')).toBeTruthy();
    expect(f.set('', 'null')).toBeFalsy();
  });

  it('dumpのテスト', () => {
    const f = new FileStore([{ key: 'foo', value: 'hoge' }]);
    expect(f.dump()).toMatch(/foo:hoge\n/);
  });
});
