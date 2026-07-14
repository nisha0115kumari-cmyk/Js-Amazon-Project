import {formateCurrency} from '../../scripts/utils/money.js';

console.log('tests suite: formateCurrency');

console.log('converts cents into dollars');

if(formateCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed');
};

console.log('works with zero');

if(formateCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
};

console.log('rounds upto the nearest cent');

if(formateCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
};

