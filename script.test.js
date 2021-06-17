const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpics.com"];

describe("googleSearch", () => {
	it("silly test", () => {
		expect("hellooooo").toBe("hellooooo");
	});

	it("searching google base case", () => {
		expect(googleSearch("testtest", dbMock)).toEqual([]);
		expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpics.com"]);
	});

	it("work with undefined and null input", () => {
		expect(googleSearch(undefined, dbMock)).toEqual([]);
		expect(googleSearch(null, dbMock)).toEqual([]);
	});

	it("does not return more than 3 matches", () => {
		expect(googleSearch(".com", dbMock).length).toEqual(3);
	});
});
