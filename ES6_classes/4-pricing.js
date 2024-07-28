import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !Number.isFinite(amount)) {
      throw new TypeError('Amount must be a finite number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError('Amount must be a finite number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || !Number.isFinite(amount)) {
      throw new TypeError('Amount must be a finite number');
    }
    if (typeof conversionRate !== 'number' || !Number.isFinite(conversionRate)) {
      throw new TypeError('Conversion rate must be a finite number');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
