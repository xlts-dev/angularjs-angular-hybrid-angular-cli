import type { Locator, Page } from '@playwright/test';

export class AngularjsMaterialButtonsPage {
  readonly page: Page;
  readonly buttons: Locator;
  readonly flatButtons: Locator;
  readonly raisedButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttons = page.getByRole('tab', { name: 'Buttons' });
    this.flatButtons = page.getByTestId('flat-buttons-section').getByRole('button');
    this.raisedButtons = page.getByTestId('raised-buttons-section').getByRole('button');
  }
}
