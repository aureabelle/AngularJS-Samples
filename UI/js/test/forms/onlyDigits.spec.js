/// <reference path="../../lib/jquery/jquery.js" />
/// <reference path="../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/forms/onlyDigits.js" />

(function () {
    'use strict';

    describe('payza.forms: onlyDigits function', function () {

        var onlyDigits = payza.forms.onlyDigits;

        it('is loading properly', function () {
            expect(typeof onlyDigits).toBe('function');
        });

        it('is allowing digits', function () {
            var i;

            /* digits from 0 to 9 */
            for (i = 48; i <= 57; i = i + 1) {
                expect(onlyDigits($.Event('keypress', { keyCode: i }))).toBe(true);
            }
        });

        it('is allowing function keys', function () {
            var i;

            /* function keys */
            for (i = 0; i <= 31; i = i + 1) {
                expect(onlyDigits($.Event('keypress', { keyCode: i }))).toBe(true);
            }
        });

        it('is not allowing other symbols', function () {
            var i;

            /* various symbols */
            for (i = 32; i <= 47; i = i + 1) {
                expect(onlyDigits($.Event('keypress', { keyCode: i }))).toBe(false);
            }

            /* letters and other symbols (ASCII) */
            for (i = 58; i <= 255; i = i + 1) {
                expect(onlyDigits($.Event('keypress', { keyCode: i }))).toBe(false);
            }
        });

    });

}());