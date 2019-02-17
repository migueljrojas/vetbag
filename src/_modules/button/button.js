'use strict';

// Constructor
var Button = function() {
  this.name = 'button';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Button;
