import {formateCurrency} from '../../scripts/utils/money.js';

describe('Tests suite : formateCurrency',() => {
  it('converts cents to dollars',() => {
    expect(formateCurrency(2095)).toEqual('20.95');
  });
  it('works with zero',() => {
    expect(formateCurrency(0)).toEqual('0.00');
  });
  it('rounds down to the nearest cent',() => {
    expect(formateCurrency(2000.4)).toEqual('20.00');
  });
  it('work with negative',() => {
    expect(formateCurrency(-500)).toEqual('-5.00');
  })
});

