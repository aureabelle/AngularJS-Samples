/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/behaviorTrigger.js" />

(function () {
    'use strict';

    describe('plugins: behaviorTrigger plugin', function () {

        it('is loading properly', function () {
            // TEST
            expect(typeof $.fn.behaviorTrigger).toBe('function');
        });

        it('is triggering behaviors', function () {
            var $element = $('<div/>');
            $element.css({
                width: '100px',
                height: '100px',
                display: 'none'
            });
            $element.attr('data-behavior', 'click(); keypress()');

            // add the element to the document
            $('body').prepend($element);

            // set up a spy
            spyOn($.fn, 'click');
            spyOn($.fn, 'keypress');

            // trigger the behaviors
            $element.behaviorTrigger();

            // TEST
            expect($.fn.click).toHaveBeenCalled();
            expect($.fn.click.calls.length).toEqual(1);
            expect($.fn.keypress).toHaveBeenCalled();
            expect($.fn.keypress.calls.length).toEqual(1);

            // cleanup
            $element.remove();
        });
    });

}());