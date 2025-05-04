import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type PomFixtureTypes = {
    loginPage: LoginPage
}

export const test = baseTest.extend<PomFixtureTypes>({
    loginPage: async({page},use) =>{
        await use (new LoginPage(page));
    }
})