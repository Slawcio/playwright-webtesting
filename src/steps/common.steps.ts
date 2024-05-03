import { When, Then } from '@cucumber/cucumber';
import { ElementProvider } from "../utilities/elementProvider.ts";
import { Utils } from '../utilities/utils.ts';
import { page } from './world.ts';
import { expect } from '@playwright/test';

When('I click {string}', async (selectorName: string) => {
    await (await ElementProvider.getElement(selectorName)).click();
    await page.waitForLoadState();
});

When('I type {string} into {string}', async (text: string, elementName: string) => {
    if(text.includes("random"))
        text = Utils.getRandomValueBasedOnText(text);
    await (await ElementProvider.getElement(elementName)).fill(text);
});

When('I select {string} from dropdown {string}', async (text: string, elementName: string) => {
    await (await ElementProvider.getElement(elementName)).selectOption(text);
});

Then('I see {string}', async (selectorName: string) => {
    await expect(await ElementProvider.getElement(selectorName)).toBeVisible();
});

Then('I dont see {string}', async (selectorName: string) => {
    await expect(await ElementProvider.getElement(selectorName)).not.toBeVisible();
});

Then('I see element {string} displays text {string}', async (selectorName: string, textToValidate: string) => {
    await expect(await ElementProvider.getElement(selectorName)).toHaveText(textToValidate);
});

Then('I see elements {string} contains text {string}', async (selectorName, textToValidate) => {
    const elements = await ElementProvider.getElements(selectorName);
    expect(await Utils.getConcatenatedText(elements)).toContain(textToValidate);
});

Then('Pause {int}', async (timeout: number) => { // fast debug purpose
    await page.waitForTimeout(timeout);
});

