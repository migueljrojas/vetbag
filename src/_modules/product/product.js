'use strict';

// Constructor
var Product = function() {
    var products = $('.product');

    if (products.length > 0) {
        products.each(function() {
            var $this = $(this);
            var productSizes = $this.find('.button__input');
            
            productSizes.first().attr('checked', true);
        });
    }
};

module.exports = Product;
