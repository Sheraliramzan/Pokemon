import { test, expect } from '@playwright/test'

test('should navigate to the home page', async ({ page }) => {
  // Start from the login page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Login User')
  // The new URL should be index page (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/home')
})

test('Test multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('http://localhost:3000/')
  await page2.goto('http://localhost:3000/')
})