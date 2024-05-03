import { Page } from "../Page.ts";

export default new class LoginPage extends Page {

    protected readonly pageName: string = "login page";
    protected readonly locatorsMap: Map<string, string> = new Map([
        [this.pageName,'.login-page'],
        ['login input', '[data-test = login-form-email] input'],
        ['password input', '[data-test = login-form-password] input'],
        ['login button', '[data-test = login-form-login-cta]'],
        ['registration button', '[data-test = login-form-register-cta]'],

        //registration layer
        ['registration layer', '[data-automation-id = layer-content]'],
        ['name input', '[data-test = register-layer-name] input'],
        ['last name input', '[data-test = register-layer-lastName] input'],
        ['email input', '[data-test = register-layer-email] input'],
        ['password input', '[data-test = register-layer-password] input'],
        ['password confirmation input', '[data-test = register-layer-passwordConfirm] input'],
        ['regulation consent checkbox', '[data-test = register-layer-regulationConsent] input'],
        ['confirm registration button', '[data-test = register-layer-cta]']
    ]);

}