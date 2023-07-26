import { type Locator, type Page } from "@playwright/test";

export class NavigationPage{
    readonly page:Page;
    menueLocatorPattern:string
    menueLocator:Locator
    pageLocatorPattern: string
    pageLocator: Locator


    constructor(page){
        this.page=page
    }

    async getPage(menueName:string,pageName:string){
        this.menueLocatorPattern= `//a[@href='#']//p[contains(text(),'${menueName}')]/..`;
        this.menueLocator=this.page.locator(this.menueLocatorPattern)
        await this.menueLocator.click()
        this.pageLocatorPattern =`//li//p[text()=' ${pageName}']`;
        this.pageLocator=this.page.locator(this.pageLocatorPattern)
        await this.pageLocator.click()
    }
    
}