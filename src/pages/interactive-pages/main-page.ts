import { Page } from "../Page.ts";

export default new class MainPage extends Page {

    protected readonly pageName: string = "main page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'ems-euro-mobile-home-page'],

        //cookie popup
        ['accept cookie','#onetrust-accept-btn-handler'],

        //header
        ['my account box', '.account__user'],
        ['search input', '.text-input__search input'],
        ['search button', '[automation-id = search-button]']
    ]);

}