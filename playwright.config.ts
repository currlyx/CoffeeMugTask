import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
const URL = process.env.URL as string;

const config: PlaywrightTestConfig = {
  testMatch: ["tests/addToCart.test.ts"],
  use: {
    baseURL: process.env.URL,
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