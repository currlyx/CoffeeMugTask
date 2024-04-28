import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/addToCart.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "on-failure"
  }]]
};

export default config;