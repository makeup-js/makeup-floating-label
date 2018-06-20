describe('makeup-next-id', function() {
    var floatingLabel = require('../index.js');

    describe('when module is imported', function() {
        it('module should not be undefined', function() {
            expect(floatingLabel).not.toEqual(undefined);
        });
    });
});
