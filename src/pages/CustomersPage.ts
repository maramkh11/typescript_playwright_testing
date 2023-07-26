import { expect, type Locator, type Page } from "@playwright/test";

export class CustomersPage{
    readonly page: Page;
    readonly ADD_NEW_BUTTON: Locator;
    readonly EMAIL_INPUT: Locator;
    readonly SAVE_BUTTON: Locator;
    readonly SEARCH_BUTTON:Locator;
    readonly ALERT_SUCCESS:Locator;


    constructor(page){
        this.page=page
        this.ADD_NEW_BUTTON=page.getByRole('link', { name: ' Add new' })
        this.EMAIL_INPUT=page.getByLabel('Email')
        this.SAVE_BUTTON=page.getByRole('button', { name: ' Save', exact: true });
        this.SEARCH_BUTTON=page.getByRole('button', { name: ' Search' });
        this.ALERT_SUCCESS=page.locator("//div[contains(@class,'alert-success')]")
    }

    async clickAddNewCustomer(){
        await this.ADD_NEW_BUTTON.click()
    }

    async enterEmail(emailValue){
        await this.EMAIL_INPUT.click()
        await this.EMAIL_INPUT.fill(emailValue)
    }

    async clickSave(){
        await this.SAVE_BUTTON.click()
    }

    async clickSearch(){
        await this.SEARCH_BUTTON.click()
    }

    async checkAlertSuccessVisible(){
        await expect(this.ALERT_SUCCESS).toBeVisible()
    }
}