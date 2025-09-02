import { expect, Page, Locator } from '@playwright/test';

export class eCom {
  readonly page: Page;
  readonly eComurl: string; 
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly eComlogin: Locator;
  readonly button: Locator;
  readonly addTocartSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eComurl = 'https://rahulshettyacademy.com/client/#/auth/login';
    this.userEmail = page.locator('#userEmail');
    this.userPassword = page.locator('#userPassword');
    this.eComlogin = page.locator('#login');
    this.button = page.locator('[type="submit"]');
    this.addTocartSuccess = page.locator('#toast-container');
  }
}
