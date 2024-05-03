import { page } from '../world.ts';
import { Environments } from '../utilities/environments.ts';
import { Locator } from 'playwright';

export abstract class Page {

    protected abstract readonly pageName: string | undefined;
    protected abstract readonly locatorsMap: Map<string, string> | undefined;

    public async isExisting(): Promise<boolean> {
        await page.waitForLoadState();
        if (this.pageName) {
            const selector: string = this.getSelector(this.pageName);
            const element: Locator = await page.locator(selector);
            return await element.count() == 1;
        } else {
            throw new Error(`Page name is undefined.`);
        }
    }

    public async getElement(selectorName: string): Promise<Locator> {
        const selector: string = this.getSelector(selectorName);
        return page.locator(selector).first();
    }

    public async getElements(selectorName: string): Promise<Locator[]> {
        const selector: string = this.getSelector(selectorName);
        return page.locator(selector).all();
    }

    private getSelector(selectorName: string): string {
        if (!this.locatorsMap) {
            throw new Error("Locators map is undefined.");
        }
        const selector: string | undefined = this.locatorsMap.get(selectorName);
        if (!selector) {
            throw new Error(`selectorName: "${selectorName}" does not match any locatorsMap in page: "${this.pageName}"`);
        }
        return selector;
    }

    public async open(pageName): Promise<void> {
        await page.goto(Environments[pageName]);
    }
}
