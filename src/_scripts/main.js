// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var DataSwitcher = require('../_modules/data-switcher/data-switcher');
var DataToggle = require('../_modules/data-switcher/data-toggle');
var Products = require('../_modules/product/product');
var Landing = require('./landing');

$(function() {
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new DataSwitcher();
    new DataToggle();
    new Products();
    new Landing();
});
