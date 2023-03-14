import type { Locator, Page } from '@playwright/test';

export class AngularMaterialTabsPage {
  readonly page: Page;
  readonly cdkTree: Locator;
  readonly tabThree: Locator;
  readonly tabThreeContent: Locator;
  readonly buttons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cdkTree = page.getByRole('tab', { name: 'CDK Tree' });
    this.tabThree = page.getByRole('tab', { name: 'Tab Three' });
    this.tabThreeContent = page.getByTestId('ng-tab-three-content');
    this.buttons = page.getByRole('tab', { name: 'Buttons' });
  }
}
