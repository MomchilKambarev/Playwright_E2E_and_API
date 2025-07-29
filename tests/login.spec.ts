import { test } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page
    .locator(
      `//button[@class='fc-button fc-cta-consent fc-primary-button']//*[contains(text(),'Consent')]`
    )
    .click();
  await page.locator(`//a[contains(text(),' Signup / Login')]`).click();
});
