import { When, Then } from '@cucumber/cucumber';
import { ElementProvider } from "../utilities/element-provider.ts";
import { Utils } from '../utilities/utils.ts';
import { page } from '../world.ts';
import { expect } from '@playwright/test';
import { Locator } from 'playwright';

When('I click {string}', async (selectorName: string) => {
    await (await ElementProvider.getElement(selectorName)).click();
    await page.waitForLoadState();
});

When('I click {string} elements', async (selectorName: string) => {
    const elements: Locator[] = await (await ElementProvider.getElements(selectorName));
    for(const element of elements){
        await element.click();
    }
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

Then('I see {string} contains {string}', async (selectorName: string, textToValidate: string) => {
    await expect(await ElementProvider.getElement(selectorName)).toContainText(textToValidate);
});

Then('I dont see {string}', async (selectorName: string) => {
    await expect(await ElementProvider.getElement(selectorName)).not.toBeVisible();
});

Then('I dont see {string} elements', async (selectorName: string) => {
    const elements: Locator[] = await ElementProvider.getElements(selectorName);
    for(const element of elements){
        await expect(element).not.toBeVisible();
    }
});

Then('I see {string} elements contains {string}', async (selectorName, textToValidate) => {
    const elements = await ElementProvider.getElements(selectorName);
    expect(await Utils.getConcatenatedText(elements)).toContain(textToValidate);
});

Then('Pause {int}', async (timeout: number) => { // fast debug purpose
    await page.waitForTimeout(timeout);
});

