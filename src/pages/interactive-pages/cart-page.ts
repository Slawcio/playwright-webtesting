import { Page } from "../Page.ts";

export default new class Product extends Page {

    protected readonly pageName: string = "cart page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'#basket'],
        ['product summarize', '#cart-summarize'],
        ['product box', '.product-box']
    ]);
}