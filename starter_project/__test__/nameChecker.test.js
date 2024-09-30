import { checkUrl } from "../src/client/js/nameChecker"

describe("Testing the checkUrl functionality", () => {
    test("Testing the checkUrl() function", () => {
        expect(checkUrl).toBeDefined();
    });

    test("Testing valid URL", () => {
        expect(checkUrl('https://www.udacity.com/')).toEqual(true);
    });

    test("Testing invalid URL", () => {
        expect(checkUrl('jkghadrhgkrh')).toEqual(false);
    });

});
