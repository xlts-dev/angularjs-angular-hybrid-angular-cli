import type { Locator, Page } from '@playwright/test';

export class AngularjsMaterialTabsPage {
  readonly page: Page;
  readonly tabTwo: Locator;
  readonly tabTwoContent: Locator;
  readonly tabThree: Locator;
  readonly tabThreeContent: Locator;
  readonly buttons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabTwo = page.getByRole('tab', { name: 'Tab two' });
    this.tabTwoContent = page.getByTestId('tab-two-content');
    this.tabThree = page.getByRole('tab', { name: 'Tab three' });
    this.tabThreeContent = page.getByTestId('ngjs-tab-three-content');
    this.buttons = page.getByRole('tab', { name: 'Buttons' });
  }
}
