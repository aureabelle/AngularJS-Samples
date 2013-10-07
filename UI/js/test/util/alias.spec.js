/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/util/alias.js" />

(function () {
    'use strict';

    describe('payza.util: alias function', function () {

        var alias = payza.util.alias;

        it('is loading properly', function () {
            expect(typeof alias).toBe('function');
        });

        it('is correctly creating namespaced entities', function () {
            var myObj = { prop: {} };
            alias(myObj, '_dummy.namespaced.object');

            expect(typeof _dummy.namespaced.object.prop).toBe('object');

            // cleanup
            delete window._dummy;
        });

        it('is not overwriting an existing alias', function () {
            var myObj = { prop: {} },
                myObj2 = { prop2: {} };

            alias(myObj, '_dummy.namespaced.object');

            try {
                alias(myObj2, '_dummy.namespaced.object');
            } catch (error) {}

            expect(_dummy.namespaced.object).toBe(myObj);

            // cleanup
            delete window._dummy;
        });

        it('is throwing an error if an alias to be created already exists', function () {
            var myObj = { prop: {} },
                myObj2 = { prop2: {} };

            alias(myObj, '_dummy.namespaced.object');

            try {
                alias(myObj2, '_dummy.namespaced.object');
            } catch (error) {
                expect(error instanceof Error).toBe(true);
            }

            // cleanup
            delete window._dummy;
        });

        it('is correctly injecting an alias into an existing namespace tree', function () {
            var myObj = { prop: {} },
                myObj2 = { prop2: {} };

            alias(myObj, '_dummy.namespaced.some.object');
            alias(myObj2, '_dummy.namespaced.some.other.object');

            expect(_dummy.namespaced.some.object).toBe(myObj);
            expect(_dummy.namespaced.some.other.object).toBe(myObj2);

            // cleanup
            delete window._dummy;
        });

    });
}());