'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var dropdownButton = $('.header__dropdown-button');
    var dropdown = $('.header__dropdown');

    var targets = $('[data-button]');
    var contents = $('[data-list]');

    if (targets.length > 0) {
        targets.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var targettedContent = $this.data('button');

            targets.removeClass('-active');
            contents.removeClass('-active');

            $this.toggleClass('-active');
            contents.filter(function() {
                return $(this).data('list') === targettedContent;
            }).toggleClass('-active');
        });
    };

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
