import { Page } from "../Page.ts";

export default new class AccountPage extends Page {

    protected readonly pageName: string = "account page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'#customer-account-front-message'],
        ['my account label', '.content-header'],
        ['account caret down', '#header i'],
        ['logout on caret link','.logout-button']
    ]);

}