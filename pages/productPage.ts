import { expect, Page } from "@playwright/test";
import { ProductPageLocators } from "../locators/locators";

export default class ProductPage {

    constructor(public page: Page) {}

    async seeDetailsOfProduct() {
        await this.page.hover(ProductPageLocators.hoverOverElementLocator, {
            strict: false
        })
        await this.page.locator(ProductPageLocators.quickViewButtonLocator)
            .nth(0).click()
    }
    async getProductName() {
        const productName = this.page.locator(ProductPageLocators.productNameLocator);
        const textElement = productName.textContent();
        console.log("Name of added item: " + textElement)
        return textElement
    }
    async addtProductToTheCart() {
        await this.page.locator(ProductPageLocators.addToCartButtonLocator).click();
    }
    async isItemVisible() {
        const item = this.page.locator(ProductPageLocators.viewCartButtonLocator);
        await item.waitFor({state:"visible"})
        return item;
    }
    async goToCart() {
        await this.page.locator(ProductPageLocators.viewCartButtonLocator).click();
    }
    async checkButtonForQuantityChange() {
        const updateQuantityButton = this.page.locator(ProductPageLocators.continueShoppingButtonLocator)
        expect(updateQuantityButton).toBeDefined();
    }
    async checkProductInCart() {
        const productInTheCart = this.page.locator(ProductPageLocators.productInTheCartNameLocator);
        const textElement = productInTheCart.textContent();
        console.log("Name of product in the cart: " + textElement)
        return textElement
    }
}