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
    expect(catalogueService.countBooksByFirstLetter("d")).toBe(1);
    });
  });

describe("CatalogueService", () => {
    test("returns quantity of books by title", () => {
      expect(catalogueService.getQuantity("Dracula")).toBe(0);
      expect(catalogueService.getQuantity("Wolf Hall")).toBe(33);
    });
  });

describe("CatalogueService", () => {
  test("returns array of books by author", () => {
    expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual(
      [
        { title: "2666", author: "Robert Bolaño", quantity: 17 },
        { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
      ]
    )
  })
});

describe("CatalogueService", () => {
  test("check the quantity of a title", () => {
    expect(catalogueService.checkQuantity("By Night in Chile", 8)).toBe(true);
    expect(catalogueService.checkQuantity("By Night in Chile", 100)).toBe(false);
  })
})
});
