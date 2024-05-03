import { Page } from "../Page.ts";

export default new class MainPage extends Page {

    protected readonly pageName: string = "main page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'ems-euro-mobile-home-page'],

        //header
        ['my account button', '.account__user']
    ]);

}