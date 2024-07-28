class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || !name.trim()) {
      throw new TypeError('Name must be a non-empty string');
    }
    if (typeof code !== 'string' || !code.trim()) {
      throw new TypeError('Code must be a non-empty string');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${this._code}]`;
  }
}

export default Airport;
