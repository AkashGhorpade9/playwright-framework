// import {test} from '../fixtures/pom-fixtures';
import {test} from '../fixtures/common-fixture';
import CommonUtils from '../utils/CommonUtils';
import {expect}  from "@playwright/test";

test("Temp Test", async({page,loginPage,commonUtils})=>{
    
    // await loginPage.gotoUrl();
    // await loginPage.loginOrangeHrm();

    // console.log(commonUtils.encryptData('admin123'));
    
    
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.gotoUrl();
    await loginPage.loginOrangeHrm(process.env.USER_NAME!,process.env.PASSWORD!);
    await expect(loginPage.dashboardLable).toHaveText('Dashboard');
})
