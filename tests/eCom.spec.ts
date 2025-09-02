import { test, expect } from '@playwright/test';

test('Navigate Login Page', async({page}) => {


 // Navigate Login Page
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

 // Verify Login Page
  await expect (page.locator('#userEmail')).toBeVisible();

 // Input Email
  await page.locator('#userEmail').fill('testecom@mailinator.com');

// Input Password
await page.locator('#userPassword').fill('abcdE123');

// Click Login
await page.locator('input[type="submit"]').click();

}
)
