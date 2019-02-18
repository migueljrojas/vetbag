'use strict';

var ProductSlider = require('../product-slider');

describe('ProductSlider View', function() {

  beforeEach(function() {
    this.productSlider = new ProductSlider();
  });

  it('Should run a few assertions', function() {
    expect(this.productSlider);
  });

});
