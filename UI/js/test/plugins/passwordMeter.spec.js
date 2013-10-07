/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/plugins/passwordMeter.js" />

(function () {
    'use strict';

    var $element,
        $passwordInput,
        outOfViewCSS = {
            display: 'none',
            position: 'absolute',
            top: 0,
            left: '-1000px'
        };

    describe('plugins: passwordMeter plugin', function () {

        beforeEach(function () {
            $element = $('<div class="password-meter" />');
            $passwordInput = $('<input type="password" class="password-input" />');
            $element.css(outOfViewCSS);
            $passwordInput.css(outOfViewCSS);
            $element.html('<p class="strength weak">Weak Password</p>' +
                            '<p class="strength good">Good Password</p>' +
                            '<p class="strength strong">Strong Password</p>' +
                            '<div class="meter"></div>');
            $('body').prepend($element, $passwordInput);
        });

        afterEach(function () {
            $element.remove();
            $passwordInput.remove();
        });

        it('is loading properly', function () {
            expect(typeof $.fn.passwordMeter).toBe('function');
        });

        it('is throwing an error if target parameter is missing', function () {
            var missingParameterError = null;

            try {
                $element.passwordMeter();
            } catch (err) {
                missingParameterError = err;
            }

            // TEST
            expect(missingParameterError instanceof Error).toBe(true);
        });

        it('is correctly indicating a weak password', function () {
            $element.passwordMeter({ monitor: '.password-input' });
            $passwordInput.val('123456').trigger('keyup');

            // TEST
            // we expect that the password meter element is displayed
            expect($('.password-meter').filter(':visible').length).toBe(1);
            // we expect the 'good' and 'strong' strength labels to be hidden
            expect($('.strength.good, .strength.strong').filter(':visible').length).toBe(0);
        });

        it('is correctly indicating a good password', function () {
            $element.passwordMeter({ monitor: '.password-input' });
            $passwordInput.val('A better pa55word').trigger('keyup');

            // TEST
            // we expect that the password meter element is displayed
            expect($('.password-meter').filter(':visible').length).toBe(1);
            // we expect the 'weak' and 'strong' strength labels to be hidden
            expect($('.strength.weak, .strength.strong').filter(':visible').length).toBe(0);
        });

        it('is correctly indicating a strong password', function () {
            $element.passwordMeter({ monitor: '.password-input' });
            $passwordInput.val('$3efF% %33Dfg...').trigger('keyup');

            // TEST
            // we expect that the password meter element is displayed
            expect($('.password-meter').filter(':visible').length).toBe(1);
            // we expect the 'weak' and 'good' strength labels to be hidden
            expect($('.strength.weak, .strength.good').filter(':visible').length).toBe(0);
        });

    });

}());