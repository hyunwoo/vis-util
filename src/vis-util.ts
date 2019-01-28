// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import './type.extension';
import { Matrix } from './matrix';
import { deepEqual } from 'fast-equals';
const val = [[1, 2, 3], [4, 5, 6]];
const a = new Matrix<number>(3, 5, 0);

// Array.prototype.repeat = (value, length) => {
//   while (L) this[--L] = what;
//   return this;
// };
a.print();
export default class VisUtil {}
