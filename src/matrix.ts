import copy from 'fast-copy';

export class Matrix<T extends string | number> {
  private _values: T[][];
  private _col: number;
  private _row: number;
  private _rowKeys: string[] = [];
  private _colKeys: string[] = [];

  public constructor()
  public constructor(col: number, row: number, defaultValue?: T)
  public constructor(col?: number, row?: number, defaultValue?: T) {
    this._col = col || 0;
    this._row = row || 0;

    this._values = new Array(this._col);
    for (let i = 0; i < this._col; i++) {
      const a = new Array<T>(this._row);
      this._values[i] = a;
    }
    if (defaultValue === undefined) {
      return;
    }
    for (const arr of this._values) {
      arr.clear(defaultValue);
    }
  }

  public get col(): number {
    return this._col;
  }
  public get row(): number {
    return this._row;
  }

  public print(): void {
    for (const arr of this._values) {
      console.log(arr);
    }
  }

  public setRowKeys(keys: string[]): Matrix<T> {
    this._rowKeys = copy(keys);
    return this;
  }

  public setColKeys(keys: string[]): Matrix<T> {
    this._colKeys = copy(keys);
    return this;
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
    this._rowKeys = new Array<string>(length);
    this._colKeys = new Array<string>(length);
    this._values = copy(values);
    return this;
  }

  public setValue(col: number, row: number, value: T): Matrix<T> {
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
  public toJSON(): object {
    console.log(this._rowKeys, this._colKeys);
    return {};
  }
}
