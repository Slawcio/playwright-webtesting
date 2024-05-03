import { Page } from "../Page.ts";

export default new class Product extends Page {

    protected readonly pageName: string = "product page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'ems-euro-mobile-product-card'],
        ['add to cart button', '[data-test = add-product-to-the-cart]'],

        //insurance popup
        ['insurance popup', '[data-automation-id = popup-header__close]']
    ]);

}