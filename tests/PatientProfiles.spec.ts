import { test, expect } from '@playwright/test';

test('Navigate Login Page', async ({ page }) => {
  // Navigate Login Page
  await page.goto('https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/');

  // Verify Login Page
  await expect(page.locator('#email')).toBeEnabled();

  // Input Email
  await page.locator('#email').fill('fortestautomate@mailinator.com');

  // Input Password
  await page.locator('#password').fill('abcdE123!');

  // Click Login
  await page.locator('button[type="submit"]').click();

  // Wait for navigation to finish
  await page.waitForLoadState('networkidle');

  // Click patient profiles
  const pProfilesnav = page.locator('#nav-item-patient-profiles');
  await expect(pProfilesnav).toBeVisible();
  await pProfilesnav.click();

   // Select Patient
   await page.locator('[data-testid="EditIcon"]').nth(0).click();
   await page.locator("#submit-fab-button").click();
   await expect(page.locator('div[class="go3958317564"]')).toHaveText('Record updated successfully')

})