import { After, Before, setDefaultTimeout} from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';

export let page: Page;
export let browser: Browser;

setDefaultTimeout(30000);

Before(async () => {
    try {
        browser = await chromium.launch({headless: false});
        const context: BrowserContext = await browser.newContext();
        page = await context.newPage();
    } catch (error) {
        throw new Error(`thrown new error due to ${error}`)
    }
    return page;
});

After(async () => {
    await browser.close();
})