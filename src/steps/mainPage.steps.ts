import { Given } from '@cucumber/cucumber';
import mainPage from '../pages/interactive-pages/main.page.ts';

Given('I am on main page', async () => {
    await mainPage.open('MAIN_PAGE');
});