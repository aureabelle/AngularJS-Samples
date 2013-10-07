/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/placement.js" />

(function () {
    'use strict';

    describe('plugins: placement plugin', function () {

        var $testDiv,
            testDivCSS = {
                'width': '20px',
                'height': '20px',
                'background-color': '#eee',
                'position': 'absolute',
                'top': '0',
                'left': '0'
            };

        beforeEach(function () {
            $testDiv = $('<div/>');
            $testDiv.css(testDivCSS);
            $('body').prepend($testDiv);
        });

        afterEach(function () {
            $testDiv.remove();
        });

        it('is loading properly', function () {
            expect(typeof $.fn.placement).toBe('function');
        });

        it('is correctly placing elements at the center of the window', function () {
            // target position: center of the window
            $testDiv.placement({ 'at': 'center', 'of': 'window' });

            var targetPosition = {
                'left': Math.floor($(window).innerWidth() / 2 - $testDiv.outerWidth() / 2),
                'top': Math.floor($(window).innerHeight() / 2 - $testDiv.outerHeight() / 2)
            };

            // TEST
            expect($testDiv.offset().left).toEqual(targetPosition.left);
            expect($testDiv.offset().top).toEqual(targetPosition.top);
        });

        it('is correctly placing elements at the center of the window (with offset)', function () {
            // target position: center of the window with offset of '10 -10'
            $testDiv.placement({ 'at': 'center', 'of': 'window', 'offset': '10 -10' });

            var targetPosition = {
                'left': Math.floor($(window).innerWidth() / 2 - $testDiv.outerWidth() / 2) + 10,
                'top': Math.floor($(window).innerHeight() / 2 - $testDiv.outerHeight() / 2 - 10)
            };

            // TEST
            expect($testDiv.offset().left).toEqual(targetPosition.left);
            expect($testDiv.offset().top).toEqual(targetPosition.top);
        });

        it('is correctly placing elements at the left / center of the window', function () {
            // target position: left / center of the window
            $testDiv.placement({ 'my': 'left', 'at': 'left', 'of': 'window' });

            var targetPosition = {
                'left': 0,
                'top': Math.floor($(window).innerHeight() / 2 - $testDiv.outerHeight() / 2)
            };

            // TEST
            expect($testDiv.offset().left).toEqual(targetPosition.left);
            expect($testDiv.offset().top).toEqual(targetPosition.top);
        });

        it('is correctly placing elements relative to other elements', function () {
            var $childDiv,
                targetPosition;

            $childDiv = $('<div/>');
            $childDiv.css({
                'width': '2px',
                'height': '2px',
                'background-color': '#eee'
            });

            $testDiv.prepend($childDiv);

            $childDiv.placement({ 'my': 'right bottom', 'at': 'right bottom', 'of': 'parent' });

            // target position: childDiv's bottom right to the bottom right of testDiv
            targetPosition = {
                'left': $testDiv.offset().left + ($testDiv.outerWidth() - $childDiv.outerWidth()),
                'top': $testDiv.offset().top + ($testDiv.outerHeight() - $childDiv.outerHeight())
            };

            // TEST
            expect($childDiv.offset().left).toEqual(targetPosition.left);
            expect($childDiv.offset().top).toEqual(targetPosition.top);
        });
    });

}());