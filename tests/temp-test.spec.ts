import {test} from '../fixtures/pom-fixtures'

test("Temp Test", async({page,loginPage})=>{
    await loginPage.gotoUrl();
    await loginPage.loginOrangeHrm();
})
