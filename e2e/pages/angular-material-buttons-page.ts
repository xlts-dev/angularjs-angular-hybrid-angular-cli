import type { Locator, Page } from '@playwright/test';

export class AngularMaterialButtonsPage {
  readonly page: Page;
  readonly basicButtons: Locator;
  readonly basicLinks: Locator;
  readonly disabledBasicButtons: Locator;
  readonly raisedButtons: Locator;
  readonly raisedLinks: Locator;
  readonly disabledRaisedButtons: Locator;
  readonly strokedButtons: Locator;
  readonly strokedLinks: Locator;
  readonly disabledStrokedButtons: Locator;
  readonly flatButtons: Locator;
  readonly flatLinks: Locator;
  readonly disabledFlatButtons: Locator;
  readonly iconButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.basicButtons = page.getByTestId('basic-buttons').getByRole('button');
    this.basicLinks = page.getByTestId('basic-buttons').getByRole('link');
    this.disabledBasicButtons = page.getByTestId('basic-buttons').getByText('Disabled');
    this.raisedButtons = page.getByTestId('raised-buttons').getByRole('button');
    this.raisedLinks = page.getByTestId('raised-buttons').getByRole('link');
    this.disabledRaisedButtons = page.getByTestId('raised-buttons').getByText('Disabled');
    this.strokedButtons = page.getByTestId('stroked-buttons').getByRole('button');
    this.strokedLinks = page.getByTestId('stroked-buttons').getByRole('link');
    this.disabledStrokedButtons = page.getByTestId('stroked-buttons').getByText('Disabled');
    this.flatButtons = page.getByTestId('flat-buttons').getByRole('button');
    this.flatLinks = page.getByTestId('flat-buttons').getByRole('link');
    this.disabledFlatButtons = page.getByTestId('flat-buttons').getByText('Disabled');
    this.iconButtons = page.getByTestId('icon-buttons').getByRole('button');
  }
}
