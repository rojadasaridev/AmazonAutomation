import { test, expect } from '@playwright/test';
import { HeaderPage } from '../components/pages/headerPage.ui.model';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://amazon.co.uk');

  const headerPage = new HeaderPage(page);
  await headerPage.clickOnAcceptCookies();
  await headerPage.verifyAmazonLogo();
  await headerPage.clickOnAddress();
  await headerPage.fillWithPostcode();
  await headerPage.clickOnApplyButton();
  await headerPage.clickOnLeftNav();

});
