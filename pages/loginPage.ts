import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) {}

    async login(email: string, password: string) {
        await this.enterEmailToLogin(email);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
    }
    async enterEmailToLogin(emailaddress: string) {
        await this.page.locator("#input-email")
            .type(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator("#input-password")
            .type(password);
    }
    async clickLoginButton() {
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.page.click("input[value='Login']")
        ])
    }
}