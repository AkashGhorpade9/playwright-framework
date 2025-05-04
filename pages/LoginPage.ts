import { Page,Locator } from "@playwright/test";
export class LoginPage{
    readonly page:Page;
    readonly userName:Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.userName = page.locator("//input[@name='username']")
        this.password = page.locator("//input[@name='password']")
        this.loginButton = page.locator("//button[text()=' Login ']")
    }

    async gotoUrl(){
       await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async loginOrangeHrm(){
        await this.userName.fill('Admin');
        await this.password.fill('admin123');
        await this.loginButton.click();
    }
}