/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/modal.js" />

(function () {
    'use strict';

    describe('plugins: modal plugin', function () {

        var $element,
            elementCSS = {
                width: '400px',
                height: '300px',
                background: '#fff'
            },
            close;

        beforeEach(function () {
            $element = $('<div/>');
            $element.css(elementCSS).append('<a href="#" class="modal-close">Close modal</a>');
            $('body').prepend('<a href="#" class="trigger" style="display: block; width: 0; height: 0; overflow: hidden">Trigger modal</a>', $element);
        });

        afterEach(function () {
            $element.remove();
            $('.trigger').remove();
            $('#HTMLReporter').next().remove();
        });

        it('is loading properly', function () {
            // TEST
            expect(typeof $.fn.modal).toBe('function');
        });

        it('is properly triggered by clicking the triggeredBy element', function () {
            $element.modal({triggeredBy: '.trigger', dismissedBy: '.modal-close'});
            $('.trigger').click();

            // TEST
            expect($element.css('display')).toBe('block');
        });

        it('is properly dismissed by clicking the dismissedBy element', function () {
            $element.modal({triggeredBy: '.trigger', dismissedBy: '.modal-close'});
            $('.trigger').click();
            $element.find('.modal-close').click();

            // TEST
            expect($element.css('display')).toBe('none');
        });
    });

}());