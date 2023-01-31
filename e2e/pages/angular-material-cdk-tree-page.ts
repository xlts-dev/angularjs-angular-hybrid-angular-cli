import type { Locator, Page } from '@playwright/test';

export class AngularMaterialCdkTreePage {
  readonly page: Page;
  readonly apple: Locator;
  readonly broccoli: Locator;
  readonly pumpkins: Locator;

  constructor(page: Page) {
    this.page = page;
    this.apple = page.getByRole('treeitem', { name: 'Apple' });
    this.broccoli = page.getByRole('treeitem', { name: 'Broccoli' })
    this.pumpkins = page.getByRole('treeitem', { name: 'Pumpkins' });
  }

  async clickOnFruit(): Promise<void> {
    await this.page.getByRole('button', { name: 'toggle Fruit' }).click();
  }

  async clickOnVegetables(): Promise<void> {
    await this.page.getByRole('button', { name: 'toggle Vegetables' }).click();
  }

  async clickOnGreen(): Promise<void> {
    await this.page.getByRole('button', { name: 'toggle Green' }).click();
  }

  async clickOnOrange(): Promise<void> {
    await this.page.getByRole('button', { name: 'toggle Orange' }).click();
  }
}
