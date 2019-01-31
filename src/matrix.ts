import './type.extension';
import copy from 'fast-copy';
import { Exception } from 'handlebars';
import _ from 'lodash';

export class Matrix<T extends string | number> {
  private arrs: T[][];
  private _col: number;
  private _row: number;
  private _rowKeys: string[] = [];
  private _colKeys: string[] = [];

  public constructor()
  public constructor(row: number, col: number, defaultValue?: T)
  public constructor(row?: number, col?: number, defaultValue?: T) {
    this._row = row || 0;
    this._col = col || 0;

    this.arrs = new Array(this._row);
    for (let i = 0; i < this._row; i++) {
      const a = new Array<T>(this._col);
      this.arrs[i] = a;
    }
    if (defaultValue === undefined) {
      return;
    }
    for (const arr of this.arrs) {
      arr.clear(defaultValue);
    }
    this.initKeys();
  }

  public get col(): number {
    return this._col;
  }
  public get row(): number {
    return this._row;
  }

  public print(): void {
    console.log('\t', this._colKeys);
    for (let i = 0; i < this.arrs.length; i++) {
      console.log(`${this._rowKeys[i]}\t`, this.arrs[i]);
    }
  }

  public setRowKeys(keys: string[]): Matrix<T> {
    if (keys.length !== this._row) {
      throw new Error('input ROW Keys length is diffrent from matrix row count');
    }
    this._rowKeys = copy(keys);
    return this;
  }

  public setColKeys(keys: string[]): Matrix<T> {
    if (keys.length !== this._col) {
      throw new Error('input COL Keys length is diffrent from matrix col count');
    }
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
    this._row = values.length;
    this._col = length;
    this.arrs = copy(values);
    this.initKeys();
    return this;
  }

  public setValue(col: number, row: number, value: T): Matrix<T> {
    if (col >= this._col || row >= this._row) {
      throw new Error('Index Overflow Exception (col or row)');
    }
    this.arrs[col][row] = copy(value);
    return this;
  }

  public get values() {
    return this.arrs;
  }

  // TODO
  public transpose(): Matrix<T> {
    return this;
  }
  public mul(value: T): Matrix<T> {
    if (typeof value === 'string') {
      throw new Error('String matrix is not support multiply');
    }
    // @ts-ignore
    this.arrs = this.arrs.map(arr => arr.map(val => val * value));
    return this;
  }
  public add(value: T): Matrix<T> {
    if (typeof value === 'string') {
      throw new Error('String matrix is not support add');
    }
    // @ts-ignore
    this.arrs = this.arrs.map(arr => arr.map(val => val + value));
    return this;
  }

  // TODO
  public normalize(): Matrix<T> {
    const max = _.chain(this.arrs)
      .map(arr => _.max(arr))
      .max()
      .value();
    // @ts-ignore
    this.arrs = this.arrs.map(arr => arr.map(val => val / max));
    return this;
  }
  public toJSON(): object {
    console.log(this._rowKeys, this._colKeys);
    return {};
  }

  private initKeys(): void {
    this._colKeys = new Array<string>(this._col).clear('');
    this._rowKeys = new Array<string>(this._row).clear('');
  }
}
