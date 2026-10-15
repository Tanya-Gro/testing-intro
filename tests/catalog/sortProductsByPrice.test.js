const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("sortProductsByPrice массив", () => {
    const result = sortProductsByPrice(products);
    expect(Array.isArray(result)).toBe(true);
  });

  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, "asc");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products);
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const catalog = [
      {
        id: 1,
        name: "Наушники",
        category: "electronics",
        price: 49900,
        stock: 8,
      },
      {
        id: 3,
        name: "JavaScript для начинающих",
        category: "books",
        price: 18900,
        stock: 14,
      },
      {
        id: 4,
        name: "Настольная лампа",
        category: "home",
        price: 27900,
        stock: 3,
      },
    ];
    const result = sortProductsByPrice(catalog, "asc");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, "desc");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const catalog = [
      {
        id: 3,
        name: "JavaScript для начинающих",
        category: "books",
        price: 18900,
        stock: 14,
      },
      {
        id: 1,
        name: "Наушники",
        category: "electronics",
        price: 49900,
        stock: 8,
      },
      {
        id: 4,
        name: "Настольная лампа",
        category: "home",
        price: 27900,
        stock: 3,
      },
    ];
    const result = sortProductsByPrice(catalog, "desc");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const catalog = [
      {
        id: 5,
        name: "Чехол для ноутбука",
        category: "home",
        price: 24900,
        stock: 6,
      },
      {
        id: 2,
        name: "Клавиатура",
        category: "electronics",
        price: 35900,
        stock: 0,
      },
      {
        id: 6,
        name: "Чистый код",
        category: "books",
        price: 21900,
        stock: 0,
      },
    ];
    const result = sortProductsByPrice(catalog, "desc");
    const resultIdArray = result.map((p) => p.id);
    expect(resultIdArray).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [
      {
        id: 1,
        name: "Наушники",
        category: "electronics",
        price: 49900,
        stock: 8,
      },
      {
        id: 3,
        name: "JavaScript для начинающих",
        category: "books",
        price: 18900,
        stock: 14,
      },
      {
        id: 4,
        name: "Настольная лампа",
        category: "home",
        price: 27900,
        stock: 3,
      },
    ];
    const catalogCopy = JSON.parse(JSON.stringify(catalog));
    const result = sortProductsByPrice(catalog, "asc");
    expect(result.map((p) => p.id)).toEqual([3, 4, 1]);
    expect(catalog).toEqual(catalogCopy);
  });

  test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  test.todo("направление по умолчанию не меняет исходный массив всех товаров");
});
