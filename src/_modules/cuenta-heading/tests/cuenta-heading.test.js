'use strict';

var CuentaHeading = require('../cuenta-heading');

describe('CuentaHeading View', function() {

  beforeEach(function() {
    this.cuentaHeading = new CuentaHeading();
  });

  it('Should run a few assertions', function() {
    expect(this.cuentaHeading);
  });

});
