import { test, expect } from '@playwright/test';
import { AngularJSPanelPage } from '../pages/angularjs-panel-page';
import { AngularPanelPage } from '../pages/angular-panel-page';
import { AngularjsMaterialTabsPage } from '../pages/angularjs-material-tabs-page';
import { AngularjsMaterialButtonsPage } from '../pages/angularjs-material-buttons-page';
import { AngularMaterialTabsPage } from '../pages/angular-material-tabs-page';
import { AngularMaterialCdkTreePage } from '../pages/angular-material-cdk-tree-page';
import { AngularMaterialButtonsPage } from '../pages/angular-material-buttons-page';
import { TopNavPage } from '../pages/top-nav-page';

test.describe('AngularJS-Angular hybrid app', function() {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
  });

  test.describe('Components built for AngularJS', function() {
    test.beforeEach(async ({page}) => {
      const angularJsPanelPage = new AngularJSPanelPage(page);
      await angularJsPanelPage.clickOnAngularJSExpansionPanel();
    });

    test('Tabs', async ({page}) => {
      const angularjsMaterialTabsPage = new AngularjsMaterialTabsPage(page);

      await angularjsMaterialTabsPage.clickOnTabTwo();
      await expect(angularjsMaterialTabsPage.tabTwo).toHaveText('Tab two');
      await expect(angularjsMaterialTabsPage.tabTwoContent).toHaveText('Tab two content');

      await angularjsMaterialTabsPage.clickOnTabThree();
      await expect(angularjsMaterialTabsPage.tabThree).toHaveText('Tab three');
      await expect(angularjsMaterialTabsPage.tabThreeContent).toHaveText('Tab three content');

      await angularjsMaterialTabsPage.clickOnButtonsTab();
      await expect(angularjsMaterialTabsPage.buttons).toHaveText('Buttons');
    });

    test('Buttons', async ({page}) => {
      const angularjsMaterialButtonsPage = new AngularjsMaterialButtonsPage(page);

      await page.waitForTimeout(1000);
      await expect(await angularjsMaterialButtonsPage.flatButtons.all()).toHaveLength(5);
      await expect(await angularjsMaterialButtonsPage.raisedButtons.all()).toHaveLength(5);
    });
  });


  test.describe('Components built for Angular', function() {
    test.beforeEach(async ({page}) => {
      const angularPanelPage = new AngularPanelPage(page);
      await angularPanelPage.clickOnAngularExpansionPanel();
    });

    test('Tabs', async ({page}) => {
      const angularMaterialTabsPage = new AngularMaterialTabsPage(page);

      await angularMaterialTabsPage.clickOnCdkTreeTab();
      await expect(angularMaterialTabsPage.cdkTree).toHaveText('CDK Tree');


      await angularMaterialTabsPage.clickOnTabThree();
      await expect(angularMaterialTabsPage.tabThree).toHaveText('Tab Three');
      await expect(angularMaterialTabsPage.tabThreeContent).toHaveText('Tab three content');

      await angularMaterialTabsPage.clickOnButtonsTab();
      await expect(angularMaterialTabsPage.buttons).toHaveText('Buttons');
    });

    test('Buttons', async ({page}) => {
      const angularMaterialButtonsPage = new AngularMaterialButtonsPage(page);
      await page.waitForTimeout(1000);
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

      await angularMaterialTabsPage.clickOnCdkTreeTab();

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

  test.describe('TopNav', function() {
    test('ToNav title', async ({page}) => {
      const topNavPage = new TopNavPage(page);
      const title = await topNavPage.title;
      await expect(title).toHaveText('Angular Upgrade and Angular CLI Demo');
    });

    test('Redirect to GitHub page', async ({page}) => {
      const topNavPage = new TopNavPage(page);

      await topNavPage.clickOnGitHubIcon();

      const githubRepoName = await topNavPage.getGithubRepoName();
      await expect(githubRepoName).toHaveText('angularjs-angular-material-hybrid-demo');
    });
  });
});
