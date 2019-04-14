import { Matrix } from '../src/matrix';

/**
 * Matrix test
 */
describe('Matrix Test', () => {
  it('Matrix value test', () => {
    const val = [[1, 2, 3], [4, 5, 6]];
    const a = new Matrix<number>();
    a.setValues(val);
    const col = a.col;
    const row = a.row;
    expect(col).toEqual(2);
    expect(row).toEqual(3);
  });

  it('Matrix value test', () => {
    const a = new Matrix<number>(2, 2, 0);
    const col = a.col;
    const row = a.row;
    expect(col).toEqual(2);
    expect(row).toEqual(2);
    
  });
});
