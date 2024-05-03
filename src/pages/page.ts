import { page } from '../steps/world.ts';
import { Environments } from '../utilities/environments.ts';

export abstract class Page {

    protected abstract readonly pageName: string | undefined;
    protected abstract readonly locatorsMap: Map<string, string> | undefined;

    public getPageName() {
        return this.pageName;
    }

    public async isExisting(): Promise<boolean> {
        await page.waitForLoadState();
        if (this.pageName) {
            const selector = this.getSelector(this.pageName);
            const element = await page.locator(selector);
            if(await element.count() == 1){
                return true;
            } else {
                return false;
            }
        } else {
            throw new Error(`Page name is undefined.`);
        }
    }

    public async getElement(selectorName: string) {
        const selector = this.getSelector(selectorName);
        return page.locator(selector).first();
    }

    public async getElements(selectorName: string){
        const selector = this.getSelector(selectorName);
        return page.locator(selector).all();
    }

    private getSelector(selectorName: string) {
        if (!this.locatorsMap) {
            throw new Error("Locators map is undefined.");
        }
        const selector  = this.locatorsMap.get(selectorName);
        if (!selector) {
            throw new Error(`selectorName: "${selectorName}" does not match any locatorsMap in page: "${this.pageName}"`);
        }
        return selector;
    }

    public async open(pageName): Promise<void> {
        await page.goto(Environments[pageName]);
    }
}
