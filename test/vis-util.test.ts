import DummyClass from '../src/vis-util';
import { Matrix } from '../src/struct';

/**
 * Dummy test
 */
describe('Matrix Test', () => {
  it('Matrix value test', () => {
    const val = [[1, 2, 3], [4, 5, 6]];
    const a = new Matrix<number>();
    a.setValues(val);
    a.print();
  });
});
