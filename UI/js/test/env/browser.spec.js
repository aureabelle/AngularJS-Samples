/// <reference path="../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/env/browser.js" />

(function () {
    'use strict';

    describe('payza.env: browser object', function () {

        var browser = payza.env.browser;

        it('is loading properly', function () {
            expect(typeof browser).toBe('object');
        });

        it('is correctly identifying the browser', function () {
            expect(navigator.userAgent.toLowerCase().indexOf(browser.name)).not.toBe(-1);
            expect(navigator.userAgent.toLowerCase().indexOf(browser.version)).not.toBe(-1);
        });

    });

}());