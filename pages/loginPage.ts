import { Page } from "@playwright/test";
import { loginLocators } from "../locators/locators";

export default class LoginPage {

    constructor(public page: Page) {}

    async login(email: string, password: string) {
        await this.enterEmailToLogin(email);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
    }
    async enterEmailToLogin(emailaddress: string) {
        await this.page.locator(loginLocators.emailToLoginLocator)
            .fill(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator(loginLocators.loginPasswordLocator)
            .fill(password);
    }
    async clickLoginButton() {
        await this.page.waitForLoadState("networkidle")
        await this.page.click(loginLocators.loginButtonLocator)
    }
}