import { test, expect } from "@playwright/latest"

test("google website", async ({ page }) => {
    await page.goto('www.google.com');
});