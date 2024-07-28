class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number' || !Number.isFinite(sqft)) {
      throw new TypeError('Sqft must be a finite number');
    }

    if (new.target === Building) {
      throw new Error('Building cannot be instantiated directly');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
