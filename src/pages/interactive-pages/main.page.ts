import { Page } from "../Page.ts";

export default new class MainPage extends Page {

    protected readonly pageName: string = "main page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'ems-euro-mobile-home-page'],

        //header
        ['my account box', '.account__user'],
        ['accept cookie','#onetrust-accept-btn-handler']
    ]);

}