import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate to venue details", async ({ page }) => {
    await page.goto("/");

    const venueLink = page.locator("#venue-container a").first();
    await expect(venueLink).toBeVisible({ timeout: 10000 });

    await venueLink.click();

    await expect(page).toHaveTitle(/venue details/i);

    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).not.toContainText("Loading");
  });
});
