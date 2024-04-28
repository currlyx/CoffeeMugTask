import { expect, Page } from "@playwright/test";

export default class ProductPage {

    constructor(public page: Page) {}

    async seeDetailsOfProduct() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        })
        await this.page.locator("(//button[@title='Quick view'])")
            .nth(0).click()
    }
    async getProductName() {
        const productName = this.page.locator("div[id='product-quick-view'] h1[class='h4']");
        const textElement = productName.textContent();
        console.log("Name of added item: " + textElement)
        return textElement
    }
    async addtProductToTheCart() {
        await this.page.locator("//div[contains(@class, 'content-button')]/button[@title='Add to Cart']").click();
    }
    async isItemVisible() {
        const item = this.page.locator("//a[.='View Cart ']");
        await item.waitFor({state:"visible"})
        return item;
    }
    async goToCart() {
        await this.page.locator("//a[.='View Cart ']").click();
    }
    async checkButtonForQuantityChange() {
        const updateQuantityButton = this.page.locator("//a[contains(text(), 'Continue Shopping']")
        expect(updateQuantityButton).toBeDefined();
    }
    async checkProductInCart() {
        const productInTheCart = this.page.locator("//td[@class='text-left']/a");
        const textElement = productInTheCart.textContent();
        console.log("Name of product in the cart: " + textElement)
        return textElement
    }
}