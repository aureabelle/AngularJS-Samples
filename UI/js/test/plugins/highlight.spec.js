/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/highlight.js" />

(function () {
    'use strict';

    describe('plugins: highlight plugin', function () {

        var $testParagraph,
            selectionText;

        beforeEach(function () {
            $testParagraph = $('<p/>');
            $testParagraph.css({ 'position': 'absolute', 'top': '0', 'left': '-1000px' });
            $('body').prepend($testParagraph);
        });

        afterEach(function () {
            $testParagraph.remove();
        });

        it('is loading properly', function () {
            expect(typeof $.fn.highlight).toBe('function');
        });

        it('is properly highlighting text straight away', function () {
            // run plugin
            $testParagraph.text('straight away test').highlight();
            selectionText = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;

            // TEST
            expect(selectionText).toBe('straight away test');
        });

        it('is properly highlighting text on left-click', function () {
            // run plugin
            $testParagraph.highlight({ on: 'click' });

            // trigger highlight on left-click
            $testParagraph.text('left-click test').trigger('click');
            selectionText = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;

            // TEST
            expect(selectionText).toBe('left-click test');
        });

        it('is properly highlighting text on right-click', function () {
            // run plugin
            $testParagraph.highlight({ on: 'contextmenu' });

            // trigger highlight on right-click
            $testParagraph.text('right-click test').trigger('contextmenu');
            selectionText = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;

            // TEST
            expect(selectionText).toBe('right-click test');
        });

        it('is properly highlighting text on both left-click and right-click', function () {
            // run plugin
            $testParagraph.highlight({ on: 'click contextmenu' });

            // trigger highlight on left-click
            $testParagraph.text('left-click test').trigger('click');
            selectionText = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;

            // TEST
            expect(selectionText).toBe('left-click test');

            $('body').trigger('click');

            // trigger highlight on right-click
            $testParagraph.text('right-click test').trigger('contextmenu');
            selectionText = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;

            // TEST
            expect(selectionText).toBe('right-click test');
        });
    });

}());