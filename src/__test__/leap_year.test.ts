import LeapYear from '../code/leap_year';

describe('leap_year test', () => {
  it('インスタンスが生成可能か？', () => {
    const leapYear = new LeapYear(2022);
    expect(leapYear).toBeInstanceOf(LeapYear);
  });

  it('入力した年を文字列で取得する', () => {
    const leapYear = new LeapYear(2022);
    expect(leapYear.toString()).toMatch(/2022/);
  });

  it('うるう年か判定', () => {
    const leapYear = new LeapYear(2024);
    expect(leapYear.isLeap()).toBeTruthy();
  });

  it('うるう年でない年を指定し、判定', () => {
    const leapYear = new LeapYear(2022);
    expect(leapYear.isLeap()).not.toBeTruthy();
  });

  it('有効でない年数を指定した場合', () => {
    expect(() => new LeapYear(-1000)).toThrow();
  });
});
