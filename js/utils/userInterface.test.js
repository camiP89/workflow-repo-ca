import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const href = "/login";
    const currentPath = "/login";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it('returns true for root path when current path is "/"', () => {
    const href = "/";
    const currentPath = "/";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it('returns true for root path when current path is "/index.html"', () => {
    const href = "/";
    const currentPath = "/index.html";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it("returns true when the current path includes the href", () => {
    const href = "/venues";
    const currentPath = "/venues/123";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it("returns false when paths do not match", () => {
    const href = "/login";
    const currentPath = "/register";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(false);
  });
});
