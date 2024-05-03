import { faker, fakerEN } from '@faker-js/faker';

export class Utils {

    private static email: string | null = null;
    private static lastPassword: string | null = null;

    private static getSavedValue(text: string | null, fieldName: string){
        if(text !== null){
            return text;
        } else {
            throw new Error(`${fieldName} not yet generated when trying to confirm.`);
        }
    }


    public static async getConcatenatedText(elements): Promise<string> {
        let texts: string[] = [];

        for (const element of elements) {
            try {
                const text = await element.textContent();
                texts.push(text);
            } catch (err) {
                console.error("Error getting text for an element", err);
                texts.push(''); // Push an empty string in case of an error
            }
        }
        return texts.join('; ');
    }

    public static getRandomValueBasedOnText(text: string) {
        text = text.replace("random ", "");
        switch (text) {
            case "email":
                return Utils.email = faker.internet.email();
            case "email generated":
                return Utils.getSavedValue(Utils.email, 'email');
            case "name":
                return faker.person.firstName();
            case "last name":
                return faker.person.lastName();
            case "password":
                Utils.lastPassword = faker.internet.password({ prefix: "!4" });
                return Utils.lastPassword;
            case "password generated":
                return Utils.getSavedValue(Utils.lastPassword, 'password');
            default:
                throw new Error(`Unsupported field type for random generation: ${text}`);
        }
    }
}
