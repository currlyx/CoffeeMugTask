import { Page } from "@playwright/test";
import { registerLocators } from "../locators/locators";

export default class RegisterPage {

    constructor(public page: Page) {}
    async enterFirstName(firstName: string) {
        await this.page.locator(registerLocators.firstNameLocator)
            .fill(firstName);
    }
    async enterLastName(lastName: string) {
        await this.page.locator(registerLocators.lastNameLocator)
            .fill(lastName);
    }
    async enterEmail(email: string) {
        await this.page.locator(registerLocators.emailToRegisterLocator)
            .fill(email);
    }
    async enterTelephone(telephoneNumber: string) {
        await this.page.locator(registerLocators.phoneNumberLocator)
            .fill(telephoneNumber);
    }
    async enterPassword(password: string) {
        await this.page.locator(registerLocators.registerPasswordLocator)
            .fill(password);
    }
    async enterPasswordConfirm(password: string) {
        await this.page.locator(registerLocators.registerPasswordConfirmLocator)
            .fill(password);
    }
    isSubscribeCheck() {
        return this.page.locator(registerLocators.subscribeNoLocator);
    }
    async agreeToPolicy() {
        await this.page.click(registerLocators.agreeToPolicyLocator)
    }
    async clickContinueToRegister() {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.click(registerLocators.registerContinueButtonLocator)
    }
}