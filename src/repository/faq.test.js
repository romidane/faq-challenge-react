import faqRepository from "./faq";

describe("faqRepository", () => {
  it("return data when the client returns expected data", async () => {
    const client = {
      get: jest.fn(url =>
        Promise.resolve({
          faqs: [1, 2, 3]
        })
      )
    };
    const repository = faqRepository(client);

    const result = await repository.faqs();

    expect(result).toEqual([1, 2, 3]);
  });

  test("return empty when the client returns unexpected data", async () => {
    const client = {
      get: jest.fn(() =>
        Promise.resolve({
          unexpected: [1, 2, 3]
        })
      )
    };
    const repository = faqRepository(client);

    const result = await repository.faqs();

    expect(result).toEqual([]);
  });

  test("return empty when the client errors", async () => {
    const client = {
      get: jest.fn(() => Promise.reject("foo"))
    };
    const repository = faqRepository(client);

    const result = await repository.faqs();

    expect(result).toEqual([]);
  });
});
