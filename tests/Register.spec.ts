import { test, expect } from '@playwright/test';

test('Navigate Login Page', async({page}) => {


 // Navigate Login Page
  await page.goto('https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/');

 // Verify Login Page
  await expect (page.locator('#email')).toBeVisible();

 // Input Email
  await page.locator('#email').fill('fortestautomate@mailinator.com');

// Input Password
await page.locator('#password').fill('abcdE123!');

// Click Login
await page.locator('button[type="submit"]').click();

}
)
