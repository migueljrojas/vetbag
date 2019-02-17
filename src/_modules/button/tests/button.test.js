'use strict';

var Button = require('../button');

describe('Button View', function() {

  beforeEach(function() {
    this.button = new Button();
  });

  it('Should run a few assertions', function() {
    expect(this.button);
  });

});
