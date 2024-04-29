import { Page, expect } from "@playwright/test";
import { searchAndFillterProductPageLocators } from "../locators/locators";

export default class SearchAndFilterProductPage {

    constructor(public page: Page) {}
    async shopByCategoryClick() {
        await this.page.locator(searchAndFillterProductPageLocators.shopByCategoryLocator).click();
    }
    async selectCategory() {
        await this.page.locator(searchAndFillterProductPageLocators.selectCategoryLocator).click();
    }
    async selectManufacturer() {
        await this.page.locator(searchAndFillterProductPageLocators.selectManufacturerLocator).click();
        await this.page.waitForLoadState("domcontentloaded")
    }
    async selectAvailability() {
        const inStockCheckbox = this.page.locator(searchAndFillterProductPageLocators.inStockLocator)
        expect(inStockCheckbox).not.toBeChecked();
        await inStockCheckbox.check();
        expect(inStockCheckbox).toBeChecked();
        await this.page.waitForLoadState("domcontentloaded")
    }
}