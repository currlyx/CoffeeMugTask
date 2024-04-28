import { Page } from "@playwright/test";

export default class RegisterPage {

    constructor(public page: Page) {}
    async enterFirstName(firstName: string) {
        await this.page.locator("#input-firstname")
            .type(firstName);
    }
    async enterLastName(lastName: string) {
        await this.page.locator("#input-lastname")
            .type(lastName);
    }
    async enterEmail(email: string) {
        await this.page.locator("#input-email")
            .type(email);
    }
    async enterTelephone(telephoneNumber: string) {
        await this.page.locator("#input-telephone")
            .type(telephoneNumber);
    }
    async enterPassword(password: string) {
        await this.page.locator("#input-password")
            .type(password);
    }
    async enterPasswordConfirm(password: string) {
        await this.page.locator("#input-confirm")
            .type(password);
    }
    isSubscribeCheck() {
        return this.page.locator("#input-newsletter-no");
    }
    async agreeToPolicy() {
        await this.page.click("//label[@for='input-agree']")
    }
    async clickContinueToRegister() {
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.page.click("input[value='Continue']")
        ])
    }
}