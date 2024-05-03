import { Page } from "../Page.ts";

export default new class Product extends Page {

    protected readonly pageName: string = "precart page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'#new-k0-view'],
        ['added to cart info', '#product-added-message strong'],
        ['cart icon', '#cart-box']
    ]);

}