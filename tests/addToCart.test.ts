import { expect, test } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import SearchAndFilterProductPage from "../pages/searchAndFillterProductPage"
import ProductPage from "../pages/productPage"
import dotenv from 'dotenv';
import { loginLocators } from "../locators/locators"

dotenv.config();

const email = process.env.EMAIL as string;
const password = process.env.PASSWORD as string;
const firstName = process.env.FIRST_NAME as string;
const lastName = process.env.LAST_NAME as string;
const phoneNumber = process.env.PHONE_NUMBER as string;

test.describe("E-commerce Website Testing", async () => {
    
    test("Register test", async ({page, baseURL}) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}`)
        await page.hover(loginLocators.myAccountTabLocator)
        await page.click(loginLocators.registerOptionInTabLocator)
        await register.enterFirstName(firstName);
        await register.enterLastName(lastName);
        await register.enterEmail(email);
        await register.enterTelephone(phoneNumber);
        await register.enterPassword(password);
        await register.enterPasswordConfirm(password);
        expect(register.isSubscribeCheck()).toBeChecked();
        await register.agreeToPolicy();
        await register.clickContinueToRegister();
        expect(page.getByText("Your Account Has Been Created!")).toBeVisible();
    })

    test("Login test", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}`);
        await page.hover(loginLocators.myAccountTabLocator);
        await page.click(loginLocators.loginOptionInTabLocator);
        await login.login(email, password);
        expect(await page.title()).toBe("My Account");
    })

    test("Add to cart test", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        const searchAndFilter = new SearchAndFilterProductPage(page);
        const selectProduct = new ProductPage(page);
        await page.goto(`${baseURL}`);
        await page.hover(loginLocators.myAccountTabLocator);
        await page.click(loginLocators.loginOptionInTabLocator);
        await login.login(email, password);
        await searchAndFilter.shopByCategoryClick();
        await searchAndFilter.selectCategory();
        await searchAndFilter.selectManufacturer();
        await searchAndFilter.selectAvailability();
        await selectProduct.seeDetailsOfProduct();
        const addedProduct = await selectProduct.getProductName();
        await selectProduct.addtProductToTheCart();
        const isItemVisible = await selectProduct.isItemVisible();
        expect(isItemVisible).toBeVisible();
        await selectProduct.goToCart();
        await selectProduct.checkButtonForQuantityChange();
        const productInTheCart = await selectProduct.checkProductInCart();
        expect(addedProduct).toBe(productInTheCart);
    })
})