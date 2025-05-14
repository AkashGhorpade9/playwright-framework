import { Page,Locator } from "@playwright/test";
export class LoginPage{
    readonly page:Page;
    readonly userName:Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly dashboardLable: Locator;

    constructor(page:Page){
        this.page = page;
        this.userName = page.locator("//input[@name='username']")
        this.password = page.locator("//input[@name='password']")
        this.loginButton = page.locator("//button[text()=' Login ']")
        this.dashboardLable = page.locator("//h6")
    }

    async gotoUrl(){
       await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
    }

    

    async loginOrangeHrm(userName: string, password: string){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
       
    }
}