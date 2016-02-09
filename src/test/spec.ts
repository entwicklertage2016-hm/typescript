/// <reference path="../main/resources/frontend/scripts/file1.ts"/>

declare var it;
declare var describe;
declare var expect;

module Notes {

    it('should test something', () => {
        let a = new Test();
        expect(a.property).toBe(true);
    });

}
