const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

describe("catalogueService", () => {
  test("returns true if the book exists", () => {
    expect(catalogueService.checkBookByTitle("The Origin of Species")).toBe(true);
    expect(catalogueService.checkBookByTitle("The Chronicles of Narnia")).toBe(false);
});
});
describe("catalogueService", () => {
  test("returns number of books that begin with the letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });
});


});
