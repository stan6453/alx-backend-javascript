// import Currency from './3-currency';

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

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    verifyDataType(amount, 'number', 'Amount must be a number');
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
