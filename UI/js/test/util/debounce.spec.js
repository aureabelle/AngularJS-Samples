/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/util/debounce.js" />

(function () {
    'use strict';

    describe('payza.util: debounce function', function () {

        it('is loading properly', function () {
            expect(typeof payza.util.debounce).toBe('function');
        });

        it('is debouncing properly', function () {
            var i = 0,
                j = 0,
                startTime,
                endTime,
                elapsed,
                foo = { bar: function () { i = i + 1; endTime = new Date().getTime(); } },
                debounce = payza.util.debounce(foo.bar, 120);

            // call debounce 100 times
            runs(function () {
                startTime = new Date().getTime();
                for (j = 0; j < 100; j = j + 1) {
                    debounce();
                }
            });

            // last call should set the flag to true
            waitsFor(function () {
                return i === 1;
            });

            // the entire thing should run for at least 120ms
            runs(function () {
                elapsed = endTime - startTime;
                expect(i).toBe(1);
                expect(j).toBe(100);
                expect(elapsed >= 120).toBe(true);
            });
        });

    });
}());