/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/tooltip.js" />

(function () {
    'use strict';

    describe('plugins: tooltip plugin', function () {

        var $element;

        beforeEach(function () {
            $element = $('<abbr title="HyperText Markup Language">HTML</abbr>');
            $element.css({
                position: 'fixed',
                top: 0,
                left: '-9999px'
            });
            $('body').prepend($element);
        });

        afterEach(function () {
            $element.remove();
        });

        it('is loading properly', function () {
            // TEST
            expect(typeof $.fn.tooltip).toBe('function');
        });

        it('is correctly triggering and dismissing the tooltip', function () {
            // trigger a mouseenter event
            $element.tooltip().mouseenter();

            // TEST
            expect($('.tip-box').length).toBe(1);

            // now trigger a mouseout event
            $element.mouseout();

            // TEST
            expect($('.tip-box').length).toBe(0);
        });
    });
}());