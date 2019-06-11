import { trimToMaxChars } from "../index";

describe("Trim Cart Item Description", () => {
  it("should trim to 25 chars by default", () => {
    const desc = "Eagle Creek Translucent Specter Pack-It Starter Set";
    const result = trimToMaxChars(desc);
    expect(result).toEqual("Eagle Creek Translucent S...");
    expect(result.length).toEqual(28); // 25 + 3 for the '...'
  });

  it("Can change the trim amount manually", () => {
    const desc = "Eagle Creek Translucent Specter Pack-It Starter Set";
    const result = trimToMaxChars(desc, 10);
    expect(result).toEqual("Eagle Cree...");
    expect(result.length).toEqual(13); // 10 + 3 for the '...'
  });

  it("Should not include ellipsis for small descriptions", () => {
    const desc = "Custom Space";
    const result = trimToMaxChars(desc, 25);
    expect(result).toEqual("Custom Space");
    expect(result.length).toEqual(12);
  });
});
