import { Page, Locator } from '@playwright/test';

export class ExamplePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
  }

  async goto() {
    await this.page.goto('https://example.com');
  }

  async getHeadingText() {
    return this.heading.textContent();
  }
}
