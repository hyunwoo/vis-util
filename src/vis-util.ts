// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import './type.extension';
import { Matrix } from './matrix';
import { deepEqual } from 'fast-equals';

function test() {
  const val = [[1, 2, 3], [4, 5, 6]];
  const a = new Matrix<number>();
  a.setValues(val);
  a.setRowKeys(['A', 'B']);
  a.setColKeys(['W', 'T', '?']);
  a.mul(3);
  a.add(1);
  a.normalize();
  a.print();

  // Array.prototype.repeat = (value, length) => {
  //   while (L) this[--L] = what;
  //   return this;
  // };
}

test();

export default class VisUtil {}
