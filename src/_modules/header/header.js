'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var dropdownButton = $('.header__dropdown-button');
    var dropdown = $('.header__dropdown');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    dropdownButton.on('click', function(){
        dropdownButton.toggleClass('-active')
        dropdown.toggleClass('-active')
    });

};

module.exports = Header;
