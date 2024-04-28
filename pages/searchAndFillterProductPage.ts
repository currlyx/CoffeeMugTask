import { Page, expect } from "@playwright/test";

export default class SearchAndFilterProductPage {

    constructor(public page: Page) {}
    async shopByCategoryClick() {
        await this.page.getByRole('button', { name: 'Shop by Category' }).click();
    }
    async selectCategory() {
        await this.page.locator("//span[contains(text(),' Software')]").click();
    }
    async selectManufacturer() {
        await this.page.locator("//img[@alt='Apple']").click();
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
    }
    async selectAvailability() {
        const inStockCheckbox = this.page.locator("//label[contains(@for, 'mz-fss-0--1')]")
        expect(inStockCheckbox).not.toBeChecked();
        await inStockCheckbox.check();
        expect(inStockCheckbox).toBeChecked();
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
    }
}