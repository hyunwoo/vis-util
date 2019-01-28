import copy from 'fast-copy';

export class Matrix<T extends string | number> {
  private _values: T[][];
  private _col: number;
  private _row: number;
  constructor()
  constructor(col: number, row: number)
  constructor(col?: number, row?: number) {
    this._col = col || 0;
    this._row = row || 0;

    this._values = new Array(col);
  }
  public get colomnCount(): number {
    return this._col;
  }
  public get rowCount(): number {
    return this._row;
  }
  public print(): void {
    for (const arr of this._values) {
      console.log(arr);
    }
  }

  public setValues(values: T[][]): Matrix<T> {
    if (values.length === 0 || values[0].length === 0) {
      throw new Error('Input Value is Empty');
    }
    const length = values[0].length;
    for (const arr of values) {
      if (arr.length !== length) {
        throw new Error(
          `Each column length is expected ${length} but ${arr.length}`
        );
      }
    }
    this._row = length;
    this._col = values.length;
    this._values = copy(values);
    return this;
  }

  public set(col: number, row: number, value: T): Matrix<T> {
    this._values[col][row] = copy(value);
    return this;
  }

  public get values() {
    return this._values;
  }

  // TODO
  public transpose(): Matrix<T> {
    return this;
  }

  // TODO
  public normalize(): Matrix<T> {
    return this;
  }
}
