import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the same name from the user object in storage", () => {
    const user = { name: "Jane" };
    saveUser(user);

    const name = getUsername();

    expect(name).toBe("Jane");
  });

  it("returns null when no user exists in storage", () => {
    const name = getUsername();

    expect(name).toBeNull();
  });
});
