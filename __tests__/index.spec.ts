import fn from '../src';

describe('api.basic', () => {
  test('reurn obj is Date instance', () => {
    const res = fn();
    expect(res).toBeInstanceOf(Date);
  })
});
