import { test, expect } from '@playwright/test';
import { eCom } from '../PageObject/eCom';

test.describe('Ecom Login Flow', () => {

  test('Successful Login', async ({ page }) => {
    const Ecom = new eCom(page);

    // Navigate to Login
    await page.goto(Ecom.eComurl);

    // Fill login details
    await Ecom.userEmail.fill('testecom@mailinator.com');
    await Ecom.userPassword.fill('abcdE123');

    // Click login
    await Ecom.eComlogin.click();

    // Add to cart
    await Ecom.addTocartSuccess.click();
  });

});