import type { Page } from '@playwright/test';

export class AngularPanelPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

  async clickOnAngularExpansionPanel(): Promise<void> {
    await this.page.getByRole('button', { name: 'Angular Material Components built for Angular' }).click();
  }
}
