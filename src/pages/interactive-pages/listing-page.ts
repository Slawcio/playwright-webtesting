import { Page } from "../Page.ts";

export default new class Listing extends Page {

    protected readonly pageName: string = "listing page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'ems-euro-mobile-product-listings'],
        ['skeletons', 'ems-product-list-item-skeleton'],
        ['active filter', '[data-test=active-filter-name]'],
        ['product box', 'ems-euro-mobile-product-medium-box'],

        //left-side search results labels and filters
        ['search keyword label', '.product-list-header__search-description strong'],
        ['expand filter button', '[data-aut-id = predefined-values-filter-expander]'],
        ['filter checkbox', 'eui-check-group'],
        ['Raty do 30x0% filter checkbox', '//*[text()=\' Raty do 30x0% \'] '],
    ]);

}