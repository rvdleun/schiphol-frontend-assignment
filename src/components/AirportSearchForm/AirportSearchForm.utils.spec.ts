import { describe, expect, it } from "@jest/globals";
import { isSearchTermValid } from "@app/components/AirportSearchForm/AirportSearchForm.utils";

describe("isSearchTermValid", () => {
  it("should return true if the search term is longer than 3 characters", () => {
    expect(isSearchTermValid("1234")).toBe(true);
    expect(isSearchTermValid("1  ")).toBe(false);
    expect(isSearchTermValid("ab")).toBe(false);
    expect(isSearchTermValid("*!(A ")).toBe(true);
    expect(isSearchTermValid("1 2 4 6")).toBe(true);
  });
});
