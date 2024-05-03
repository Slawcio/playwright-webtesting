export class Utils {

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

}

