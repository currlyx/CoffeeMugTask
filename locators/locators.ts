export const loginLocators = {
    myAccountTabLocator: "//a[@data-toggle='dropdown']//span[contains(., 'My account')]",
    registerOptionInTabLocator: "'Register'", 
    loginOptionInTabLocator: "'Login'",
    emailToLoginLocator: "#input-email",
    loginPasswordLocator: "#input-password",
    loginButtonLocator: "input[value='Login']"
}

export const registerLocators = {
    firstNameLocator: "#input-firstname",
    lastNameLocator: "#input-lastname",
    emailToRegisterLocator: "#input-email",
    phoneNumberLocator: "#input-telephone",
    registerPasswordLocator: "#input-password",
    registerPasswordConfirmLocator: "#input-confirm",
    subscribeNoLocator: "#input-newsletter-no",
    agreeToPolicyLocator: "//label[@for='input-agree']",
    registerContinueButtonLocator: "input[value='Continue']"
}

export const searchAndFillterProductPageLocators = {
    shopByCategoryLocator: "//div[@data-id='217832']/a[@aria-label='Shop by Category']",
    selectCategoryLocator: "//span[contains(text(),' Software')]",
    selectManufacturerLocator: "//img[@alt='Apple']",
    inStockLocator: "//label[contains(@for, 'mz-fss-0--1')]"
}

export const ProductPageLocators = {
    hoverOverElementLocator: "//div[@class='image']/a",
    quickViewButtonLocator: "(//button[@title='Quick view'])",
    productNameLocator: "div[id='product-quick-view'] h1[class='h4']",
    addToCartButtonLocator: "//div[contains(@class, 'content-button')]/button[@title='Add to Cart']",
    viewCartButtonLocator: "//a[.='View Cart ']", 
    continueShoppingButtonLocator: "//a[contains(text(), 'Continue Shopping']",
    productInTheCartNameLocator: "//td[@class='text-left']/a"
}