import { expect, test } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import SearchAndFilterProductPage from "../pages/searchAndFillterProductPage"
import ProductPage from "../pages/productPage"

const email = "TestEmail@test.com";
const password = "TestPassword";

test.describe("E-commerce Website Testing", async () => {
    
    test("Register test", async ({page, baseURL}) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}`)
        await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
        await page.click("'Register'")
        await register.enterFirstName("TestName");
        await register.enterLastName("TestLastName");
        await register.enterEmail(email);
        await register.enterTelephone("+12345678912");
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
        await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
        await page.click("'Login'");
        await login.login(email, password);
        expect(await page.title()).toBe("My Account");
    })

    test("Add to cart test", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        const searchAndFilter = new SearchAndFilterProductPage(page);
        const selectProduct = new ProductPage(page);
        await page.goto(`${baseURL}`);
        await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
        await page.click("'Login'");
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