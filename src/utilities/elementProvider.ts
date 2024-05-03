import { Page } from '../pages/Page.ts';
import { PageFactory } from '../pages/pageFactory.ts';
import { Locator } from 'playwright';

export class ElementProvider {

	public static timeout: number = 30000; // Default timeout in milliseconds
	public static interval: number = 100; // Default interval in milliseconds

	public static async getElement(selectorName: string): Promise<Locator> {
		let elapsedTime = 0;

		while (elapsedTime < ElementProvider.timeout) {
			try {
				const currentPage: Page = await PageFactory.getCurrentPage();
				const element = await currentPage.getElement(selectorName);
				return element;  // Return if element is successfully retrieved.
			} catch (error) {
				// If an error occurs, wait for the interval then retry.
				await new Promise(resolve => setTimeout(resolve, ElementProvider.interval));
				elapsedTime += ElementProvider.interval;
			}
		}

		// If the loop exits, it means the timeout was reached without successfully retrieving the element.
		throw new Error(`Failed to find element with selector '${selectorName}' within timeout period of ${ElementProvider.timeout} ms.`);
	}

	public static async getElements(selectorName: string): Promise<Array<Locator>> {
		const currentPage: Page = await PageFactory.getCurrentPage();
		return await currentPage.getElements(selectorName);
	}

}