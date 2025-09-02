import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    this.loginButton = page.locator('input[type="submit"]');
  }

  async navigateToLoginPage() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

  async verifyLoginPageIsVisible() {
    await expect(this.emailInput).toBeVisible();
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async performFullLogin(email: string = 'testecom@mailinator.com', password: string = 'abcdE123') {
    await this.navigateToLoginPage();
    await this.verifyLoginPageIsVisible();
    await this.login(email, password);
  }
}