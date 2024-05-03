import { Page } from "./Page.ts";
import { page } from '../steps/world.ts';
import mainPage from './interactive-pages/main.page.ts';
import loginPage from './interactive-pages/login.page.ts';
import accountPage from './interactive-pages/account.page.ts';

const pages: Array<Page> = [
    mainPage,
    loginPage,
    accountPage
];

export class PageFactory {

    public static async getCurrentPage(): Promise<Page> {
        for (const page of pages) {
            if (await page.isExisting()) {
                return page;
            }
        }
        throw new Error(`Could not find pageObject in PageFactory.ts. URL: ${(page.url())}`);
    }
}