import Filter from '../code/filter';

describe('filter問題', () => {
  it('インスタンスが生成できること', () => {
    expect(new Filter(['Arsenal', 'Chelsea'])).toBeInstanceOf(Filter);
  });

  it('detect()でNGワードを含むか判定できること', () => {
    const filter = new Filter(['Arsenal', 'Chelsea']);

    expect(
      filter.detect('t_wada:昨日のArsenal vs Chelsea熱かった！')
    ).toBeTruthy();
    expect(
      filter.detect('t_wada:昨日のArsenal vs ManU熱かった！')
    ).toBeTruthy();
    expect(
      filter.detect('t_wada:ManU vs Liverpoolはそうでもなかった')
    ).toBeFalsy();
  });

  it('censor()でNGワードを置換できること', () => {
    const filter = new Filter(['Arsenal', 'Chelsea']);

    expect(filter.censor('t_wada:昨日のArsenal vs Chelsea熱かった！')).toBe(
      't_wada:昨日の<censored> vs <censored>熱かった！'
    );
  });
});
