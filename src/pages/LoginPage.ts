import { type Locator, type Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly USER_NAME: Locator;
    readonly PASSWORD: Locator;
    readonly LOGIN_BUTTON: Locator;


    constructor(page){
        this.page=page
        this.USER_NAME=page.locator('input[id="Email"]');
        this.PASSWORD=page.locator('input[id="Password"]');
        this.LOGIN_BUTTON=page.locator('button', { hasText: 'Log in' });
    }

    async login(username :string,password:string){
        await this.page.goto('https://admin-demo.nopcommerce.com');
        await this.USER_NAME.clear();
        await this.USER_NAME.fill(username);
        await this.PASSWORD.clear();
        await this.PASSWORD.fill(password);
        await this.LOGIN_BUTTON.click();
    }
}