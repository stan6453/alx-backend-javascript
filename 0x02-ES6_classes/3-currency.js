function verifyDataType(data, datatype, errMessage) {
  if (datatype === 'array' && !Array.isArray(data)) {
    throw new TypeError(errMessage);
  } else if (datatype === 'array' && Array.isArray(data)) {
    return;
  }

  if (datatype === 'string') {
    if (typeof data !== 'string') {
      throw new TypeError(errMessage);
    }
  }

  if (datatype === 'number') {
    if (typeof data !== 'number') {
      throw new TypeError(errMessage);
    }
  }
}

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    verifyDataType(code, 'string', 'Code must be a string');
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    verifyDataType(name, 'string', 'Name must be a string');
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
