import { test } from '@playwright/test';
import { NavigationPage } from '../src/pages/NavigationPage';
import { MenueNames, PageNames } from '../src/CommonNames';
import { LoginPage } from '../src/pages/loginPage';
import { CustomersPage } from '../src/pages/customersPage';


test.beforeEach( async ({ page })=>{
  const loginPage=new LoginPage(page)
  await loginPage.login('admin@yourstore.com','admin')
});

test('add new customer', async ({ page }) => {
    const navigationPage=new NavigationPage(page)
    await navigationPage.getPage(MenueNames.CUSTOMERS,PageNames.CUSTOMERS)
    const customersPage=new CustomersPage (page);
    await customersPage.clickAddNewCustomer()
    await customersPage.enterEmail('playwright-typescript-123@automation.com')
    await customersPage.clickSave()
    await customersPage.checkAlertSuccessVisible()
  });


  test.afterEach(async ({ page })=>{
      await page.close();
  });