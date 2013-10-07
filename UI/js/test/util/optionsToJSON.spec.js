/// <reference path="../../lib/jasmine/jasmine.js" />
/// <reference path="../../lib/payza/util/optionsToJSON.js" />

(function () {
    'use strict';

    describe('payza.util: optionsToJSON function', function () {

        it('is loading properly', function () {
            expect(typeof payza.util.optionsToJSON).toBe('function');
        });

        it('is correctly creating the JSON string', function () {
            var optionsToJSON = payza.util.optionsToJSON,
                options = " foo: one, bar:'two'  , baz",
                options2 = '"some":one, other:two,example',
                options3 = '',
                options4 = 'some":broken, example\'',
                options5 = "foo:one, bar : two, 'baz': false";

            expect(optionsToJSON(options)).toBe('{"foo":"one","bar":"two","baz":true}');
            expect(optionsToJSON(options2)).toBe('{"some":"one","other":"two","example":true}');
            expect(optionsToJSON(options3)).toBe('{}');
            expect(optionsToJSON(options4)).toBe('{"some":"broken","example":true}');
            expect(optionsToJSON(options5)).toBe('{"foo":"one","bar":"two","baz":false}');
        });

    });

}());