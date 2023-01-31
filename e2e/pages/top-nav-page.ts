import type { Locator, Page } from '@playwright/test';

export class TopNavPage {
  readonly page: Page;
  title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Angular Upgrade and Angular CLI Demo');
  }

  async clickOnGitHubIcon(): Promise<void> {
    await this.page.getByTestId('github').click();
  }

  async getGithubRepoName(): Promise<Locator> {
    const gitHubPage = await this.page.waitForEvent('popup');
    return gitHubPage.getByRole('link', { name: 'angularjs-angular-material-hybrid-demo' })
  }
}


