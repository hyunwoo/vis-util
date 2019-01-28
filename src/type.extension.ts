interface Number {
  toSI(): Number;
  default(): Number;
}
Number.prototype.toSI = function(): Number {
  return this;
};
Number.prototype.default = function(): Number {
  return 0;
};

interface String {
  default(): String;
}

interface Array<T> {
  clear(value: T): Array<T>;
}

Array.prototype.clear = function(value) {
  let length = this.length;
  while (length--) {
    this[length] = value;
  }
  return this;
};
