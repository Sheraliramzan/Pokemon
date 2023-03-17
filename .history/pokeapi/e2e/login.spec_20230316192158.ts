import { test, expect } from '@playwright/test'

test('should navigate to the home page', async ({ page }) => {
  // Start from the login page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Sign in')
  // The new URL should be index page (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/home')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('title')).toContainText('Ash Po')
})

test('Test multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('http://localhost:3000/')
  await page2.goto('http://localhost:3000/')
})


test.describe('Main area', () => {
  test('Header Tag', async({ page }) => {
      await page.goto('http://localhost:3000/')

      await expect(page.locator('h1')).toContainText("Let's Catch em' all");
  })


  test('Checking for inputs', async({ page }) => { 
      await page.goto('http://localhost:3000/')
      await expect(page.locator('div > input')).toHaveCount(2);
  })

  test('link', async({ page }) => {
    await page.goto('http://localhost:3000/Apisearch')

    await expect(page.locator('div')).toHaveCount(8);

    
})
test('making sure theres a button on Apisearch', async({ page }) => {
  await page.goto('http://localhost:3000/Apisearch')

  await expect(page.locator('button')).toHaveCount(1);

  
})
test('The meta tag', async ({ page }) => { 
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/Apisearch')
  

  const metaDescriptionThree = page.locator('meta[property="og:description"]');
  await expect(metaDescriptionThree).toHaveAttribute('content', 'This is a Pokemon Api Search')
})

})