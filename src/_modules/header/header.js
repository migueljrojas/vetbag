'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var headerLoginButton = $('.header__login__button');
    var headerLogin = $('.header__login');
    var headerSearchToggle = $('.header__search-toggle');
    var headerSearch = $('.header__search');
    
    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    headerLoginButton.on('click', function(){
        headerLogin.toggleClass('-active');
    });

    headerSearchToggle.on('click', function() {
        headerSearch.toggleClass('-active');
    });
};

module.exports = Header;
