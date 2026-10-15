const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, "all");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products);
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, "");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const result = filterByCategory(products, "electronics");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const result = filterByCategory(products, "books");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const result = filterByCategory(products, "home");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const result = filterByCategory(products, "clothes");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const result = filterByCategory(products, "toys");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([]);
  });

  test.todo("'sports' возвращает пустой массив");
});
