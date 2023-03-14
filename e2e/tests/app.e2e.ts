import { expect, test } from '@playwright/test';
import { AngularJSPanelPage } from '../pages/angularjs-panel-page';
import { AngularPanelPage } from '../pages/angular-panel-page';
import { AngularjsMaterialTabsPage } from '../pages/angularjs-material-tabs-page';
import { AngularjsMaterialButtonsPage } from '../pages/angularjs-material-buttons-page';
import { AngularMaterialTabsPage } from '../pages/angular-material-tabs-page';
import { AngularMaterialCdkTreePage } from '../pages/angular-material-cdk-tree-page';
import { AngularMaterialButtonsPage } from '../pages/angular-material-buttons-page';
import { TopNavPage } from '../pages/top-nav-page';

test.describe('AngularJS-Angular hybrid app', () => {
  let errorLogs: string[];

  test.beforeEach(async ({page}) => {
    errorLogs = [];

    page.on('console', message => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
      }
    });

    page.on('pageerror', err => {
      errorLogs.push(err.message);
    });

    await page.goto('');
  });

  test.afterEach(async () => {
    expect(errorLogs).toStrictEqual([]);
  });

  test.describe('Components built for AngularJS', () => {
    test.beforeEach(async ({page}) => {
      const angularJsPanelPage = new AngularJSPanelPage(page);
      await angularJsPanelPage.clickOnAngularJSExpansionPanel();
    });

    test('Tabs', async ({page}) => {
      const angularjsMaterialTabsPage = new AngularjsMaterialTabsPage(page);

      await angularjsMaterialTabsPage.tabTwo.click();
      await expect(angularjsMaterialTabsPage.tabTwo).toHaveText('Tab two');
      await expect(angularjsMaterialTabsPage.tabTwoContent).toHaveText('Tab two content');

      await angularjsMaterialTabsPage.tabThree.click();
      await expect(angularjsMaterialTabsPage.tabThree).toHaveText('Tab three');
      await expect(angularjsMaterialTabsPage.tabThreeContent).toHaveText('Tab three content');
      await expect(angularjsMaterialTabsPage.tabTwoContent).not.toBeVisible();

      await angularjsMaterialTabsPage.buttons.click();
      await expect(angularjsMaterialTabsPage.buttons).toHaveText('Buttons');
      await expect(angularjsMaterialTabsPage.tabThreeContent).not.toBeVisible();
    });

    test('Buttons', async ({page}) => {
      const angularjsMaterialButtonsPage = new AngularjsMaterialButtonsPage(page);

      await page.waitForLoadState('domcontentloaded');

      await expect(await angularjsMaterialButtonsPage.flatButtons.all()).toHaveLength(5);
      await expect(await angularjsMaterialButtonsPage.raisedButtons.all()).toHaveLength(5);
    });
  });

  test.describe('Components built for Angular', () => {
    test.beforeEach(async ({page}) => {
      const angularPanelPage = new AngularPanelPage(page);
      await angularPanelPage.clickOnAngularExpansionPanel();
    });

    test('Tabs', async ({page}) => {
      const angularMaterialTabsPage = new AngularMaterialTabsPage(page);

      await angularMaterialTabsPage.cdkTree.click();
      await expect(angularMaterialTabsPage.cdkTree).toHaveText('CDK Tree');

      await angularMaterialTabsPage.tabThree.click();
      await expect(angularMaterialTabsPage.tabThree).toHaveText('Tab Three');
      await expect(angularMaterialTabsPage.tabThreeContent).toHaveText('Tab three content');

      await angularMaterialTabsPage.buttons.click();
      await expect(angularMaterialTabsPage.buttons).toHaveText('Buttons');
      await expect(angularMaterialTabsPage.tabThreeContent).not.toBeVisible();
    });

    test('Buttons', async ({page}) => {
      const angularMaterialButtonsPage = new AngularMaterialButtonsPage(page);

      await page.waitForLoadState('domcontentloaded');

      await expect(await angularMaterialButtonsPage.basicButtons.all()).toHaveLength(5);
      await expect(await angularMaterialButtonsPage.basicLinks.all()).toHaveLength(1);
      await expect(angularMaterialButtonsPage.disabledBasicButtons).toBeDisabled();

      await expect(await angularMaterialButtonsPage.raisedButtons.all()).toHaveLength(5);
      await expect(await angularMaterialButtonsPage.raisedLinks.all()).toHaveLength(1);
      await expect(angularMaterialButtonsPage.disabledRaisedButtons).toBeDisabled();

      await expect(await angularMaterialButtonsPage.strokedButtons.all()).toHaveLength(5);
      await expect(await angularMaterialButtonsPage.strokedLinks.all()).toHaveLength(1);
      await expect(angularMaterialButtonsPage.disabledStrokedButtons).toBeDisabled();

      await expect(await angularMaterialButtonsPage.flatButtons.all()).toHaveLength(5);
      await expect(await angularMaterialButtonsPage.flatLinks.all()).toHaveLength(1);
      await expect(angularMaterialButtonsPage.disabledFlatButtons).toBeDisabled();

      await expect(await angularMaterialButtonsPage.iconButtons.all()).toHaveLength(5);
    });

    test('CDK Tree', async ({page}) => {
      const angularMaterialTabsPage = new AngularMaterialTabsPage(page);
      const angularMaterialCdkTreePage = new AngularMaterialCdkTreePage(page);

      await angularMaterialTabsPage.cdkTree.click();

      await angularMaterialCdkTreePage.clickOnFruit();
      await expect(angularMaterialCdkTreePage.apple).toBeVisible();

      await angularMaterialCdkTreePage.clickOnFruit();
      await expect(angularMaterialCdkTreePage.apple).not.toBeVisible();

      await angularMaterialCdkTreePage.clickOnVegetables();
      await angularMaterialCdkTreePage.clickOnGreen();
      await expect(angularMaterialCdkTreePage.broccoli).toBeVisible();

      await angularMaterialCdkTreePage.clickOnOrange();
      await expect(angularMaterialCdkTreePage.pumpkins).toBeVisible();

      await angularMaterialCdkTreePage.clickOnVegetables();
      await expect(angularMaterialCdkTreePage.broccoli).not.toBeVisible();
      await expect(angularMaterialCdkTreePage.pumpkins).not.toBeVisible();

    });
  });

  test.describe('TopNav', () => {
    test('Title', async ({page}) => {
      const topNavPage = new TopNavPage(page);
      const title = await topNavPage.title;
      await expect(title).toHaveText('Angular Upgrade and Angular CLI Demo');
    });

    test('GitHub link', async ({page}) => {
      const topNavPage = new TopNavPage(page);

      await topNavPage.clickOnGitHubIcon();

      const githubPage = await page.waitForEvent('popup');

      await expect(githubPage.url()).toBe('https://github.com/Splaktar/angularjs-angular-material-hybrid-demo');
    });
  });
});
