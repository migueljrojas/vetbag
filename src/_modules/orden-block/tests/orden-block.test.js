'use strict';

var OrdenBlock = require('../orden-block');

describe('OrdenBlock View', function() {

  beforeEach(function() {
    this.ordenBlock = new OrdenBlock();
  });

  it('Should run a few assertions', function() {
    expect(this.ordenBlock);
  });

});
