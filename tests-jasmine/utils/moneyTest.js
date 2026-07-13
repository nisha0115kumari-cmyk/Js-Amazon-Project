import {formateCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency',() => {
  it('converts cents into dollars',() => {
    expect(formateCurrency(2095)).toEqual('20.95');
  });

  it('work with 0',() => {
    expect(formateCurrency(0)).toEqual('0.00');
  });

  it('rounds upto the nearest cent',() => {
    expect(formateCurrency(2000.5)).toEqual('20.01');
  });
});