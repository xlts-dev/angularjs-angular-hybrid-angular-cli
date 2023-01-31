import type { Page } from '@playwright/test';

export class AngularJSPanelPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnAngularJSExpansionPanel(): Promise<void> {
    await this.page.getByRole('button', { name: 'AngularJS Material Components built for AngularJS 1.x' }).click();
  }
}
