/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/accordion.js" />

(function () {
    'use strict';

    describe('plugins: accordion plugin', function () {
        var $element;

        it('is loading properly', function () {
            expect(typeof $.fn.accordion).toBe('function');
        });

        it('is working properly with 2 items', function () {
            $element = $('<div class="accordion" />');
            $element.html('<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>');
            $('body').prepend($element);

            $element.accordion();

            // TEST
            expect($element.find('.accordion-header').filter(':first').hasClass('active')).toBe(true);  // first header should be active
            expect($element.find('.accordion-header').filter(':last').hasClass('active')).toBe(false);  // last (second) header should not be active
            expect($element.find('.accordion-content').filter(':first').is(':visible')).toBe(true);     // first content should be visible
            expect($element.find('.accordion-content').filter(':last').is(':visible')).toBe(false);     // last (second) content should be hidden

            // click on the first header
            // check the 'seesaw' behavior - content should be toggled no matter if the header is active or not
            $element.find('.accordion-header').filter(':first').click();

            // TEST
            $element.find('.accordion-header').filter(':first').queue(function () {
                expect($element.find('.accordion-header').filter(':first').hasClass('active')).toBe(false); // first header should not be active
            });
            $element.find('.accordion-header').filter(':last').queue(function () {
                expect($element.find('.accordion-header').filter(':last').hasClass('active')).toBe(true);   // last (second) header should be active
            });
            $element.find('.accordion-content').filter(':first').queue(function () {
                expect($element.find('.accordion-content').filter(':first').is(':visible')).toBe(false);    // first content should be hidden
            });
            $element.find('.accordion-content').filter(':last').queue(function () {
                expect($element.find('.accordion-content').filter(':last').is(':visible')).toBe(true);      // last (second) content should be visible
            });

            // click on the first header again
            // check the 'seesaw' behavior - content should be toggled no matter if the header is active or not
            $element.find('.accordion-header').filter(':first').click();

            // TEST
            $element.find('.accordion-header').filter(':first').queue(function () {
                expect($element.find('.accordion-header').filter(':first').hasClass('active')).toBe(true);  // first header should be active
            });
            $element.find('.accordion-header').filter(':last').queue(function () {
                expect($element.find('.accordion-header').filter(':last').hasClass('active')).toBe(false);  // last (second) header should not be active
            });
            $element.find('.accordion-content').filter(':first').queue(function () {
                expect($element.find('.accordion-content').filter(':first').is(':visible')).toBe(true);     // first content should be visible
            });
            $element.find('.accordion-content').filter(':last').queue(function () {
                expect($element.find('.accordion-content').filter(':last').is(':visible')).toBe(false);     // last (second) content should be hidden
            });

            $element.remove();
        });

        it('is working properly with more than 2 items', function () {
            $element = $('<div class="accordion" />');
            $element.html('<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="accordion-header"></div>' +
                    '<div class="accordion-content" style="width: 100px; height: 100px"></div>');
            $('body').prepend($element);

            $element.accordion();

            // TEST
            expect($element.find('.accordion-header').filter(':first').hasClass('active')).toBe(true);  // first header should be active
            expect($element.find('.accordion-header').not(':first').hasClass('active')).toBe(false);    // all other headers should not be active
            expect($element.find('.accordion-content').filter(':first').is(':visible')).toBe(true);     // first content should be visible
            expect($element.find('.accordion-content').not(':first').is(':visible')).toBe(false);       // all other contents should be hidden

            // click on the third header
            $element.find('.accordion-header').eq(2).click();

            // TEST
            $element.find('.accordion-header').filter(':first').queue(function () {
                expect($element.find('.accordion-header').filter(':first').hasClass('active')).toBe(false); // first header should not be active
            });
            $element.find('.accordion-header').eq(2).queue(function () {
                expect($element.find('.accordion-header').eq(2).hasClass('active')).toBe(true);             // third header should be active
            });
            $element.find('.accordion-content').filter(':first').queue(function () {
                expect($element.find('.accordion-content').filter(':first').is(':visible')).toBe(false);    // first content should be hidden
            });
            $element.find('.accordion-content').eq(2).queue(function () {
                expect($element.find('.accordion-content').eq(2).is(':visible')).toBe(true);                // third content should be visible
            });

            // click on the fourth header
            $element.find('.accordion-header').eq(3).click();

            // TEST
            $element.find('.accordion-header').eq(2).queue(function () {
                expect($element.find('.accordion-header').eq(2).hasClass('active')).toBe(false);    // third header should not be active
            });
            $element.find('.accordion-header').eq(3).queue(function () {
                expect($element.find('.accordion-header').eq(3).hasClass('active')).toBe(true);     // fourth header should be active
            });
            $element.find('.accordion-content').eq(2).queue(function () {
                expect($element.find('.accordion-content').eq(2).is(':visible')).toBe(false);       // third content should be hidden
            });
            $element.find('.accordion-content').eq(3).queue(function () {
                expect($element.find('.accordion-content').eq(3).is(':visible')).toBe(true);        // fourth content should be visible
            });

            $element.remove();
        });

        it('is working properly with more than 2 items and custom classes', function () {
            $element = $('<div class="accordion" />');
            $element.html('<div class="section-header"></div>' +
                    '<div class="section-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="section-header"></div>' +
                    '<div class="section-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="section-header"></div>' +
                    '<div class="section-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="section-header"></div>' +
                    '<div class="section-content" style="width: 100px; height: 100px"></div>' +
                    '<div class="section-header"></div>' +
                    '<div class="section-content" style="width: 100px; height: 100px"></div>');
            $('body').prepend($element);

            $element.accordion({
                header: '.section-header',
                content: '.section-content'
            });

            // TEST
            expect($element.find('.section-header').filter(':first').hasClass('active')).toBe(true);  // first header should be active
            expect($element.find('.section-header').not(':first').hasClass('active')).toBe(false);    // all other headers should not be active
            expect($element.find('.section-content').filter(':first').is(':visible')).toBe(true);     // first content should be visible
            expect($element.find('.section-content').not(':first').is(':visible')).toBe(false);       // all other contents should be hidden

            // click on the third header
            $element.find('.section-header').eq(2).click();

            // TEST
            $element.find('.section-header').filter(':first').queue(function () {
                expect($element.find('.section-header').filter(':first').hasClass('active')).toBe(false); // first header should not be active
            });
            $element.find('.section-header').eq(2).queue(function () {
                expect($element.find('.section-header').eq(2).hasClass('active')).toBe(true);             // third header should be active
            });
            $element.find('.section-content').filter(':first').queue(function () {
                expect($element.find('.section-content').filter(':first').is(':visible')).toBe(false);    // first content should be hidden
            });
            $element.find('.section-content').eq(2).queue(function () {
                expect($element.find('.section-content').eq(2).is(':visible')).toBe(true);                // third content should be visible
            });

            // click on the fourth header
            $element.find('.section-header').eq(3).click();

            // TEST
            $element.find('.section-header').eq(2).queue(function () {
                expect($element.find('.section-header').eq(2).hasClass('active')).toBe(false);    // third header should not be active
            });
            $element.find('.section-header').eq(3).queue(function () {
                expect($element.find('.section-header').eq(3).hasClass('active')).toBe(true);     // fourth header should be active
            });
            $element.find('.section-content').eq(2).queue(function () {
                expect($element.find('.section-content').eq(2).is(':visible')).toBe(false);       // third content should be hidden
            });
            $element.find('.section-content').eq(3).queue(function () {
                expect($element.find('.section-content').eq(3).is(':visible')).toBe(true);        // fourth content should be visible
            });

            $element.remove();
        });
    });

}());