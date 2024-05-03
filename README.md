# Playwright + Cucumber Test Framework

## Tests definition and author commentary:

Task: E-commerce Website Testing
Objective: Validate the functionality of key features on an e-commerce website using typescript and
cypress/playwright.
Scenario to Test:
1.User Registration and Login:
• Navigate to the e-commerce website's signup page.
• Create a new user account by entering a unique username, email, and password. Handle
any user input validations.
• Verify successful registration and redirect to the login page.
• Log in with the newly created credentials and confirm that the login is successful, and the
user is directed to the homepage.
2. Product Search and Filter:
   • Use the search function to find products related to "electronics."
   • Apply filters to narrow down the search results to items within a specific range.
   • Verify that the displayed products match the search criteria and filters applied.
3. Adding Items to Cart:
   • Select a product from the search results and navigate to its details page.
   • Add the product to the shopping cart.
   • Verify that the cart updates correctly with the selected item
   Tasks:
   Task 1: Test Implementation
   • Implement automated tests in Cypress/Playwright for the outlined scenarios. Ensure the
   tests are modular and reusable.

#### General outcomes
- https://spartantest-puppies.herokuapp.com/ should be equipped with aut-id. Most pages do not have them at at all.
- 8th point - spartantest page above has an error. addons are not calculated to fee the total price. Test step is failing as it should then.

    
## Description
This project implements a unique Page Factory architecture, enhancing the standard Page Object Model (POM) framework for large-scale web automation projects. The project focuses on reducing boilerplate code and improving maintainability and scalability. Serving as a proof of concept, it currently has some vulnerabilities regarding the lack of automatic advice argument to step from IDE which is helpful sometimes for newcomers. Once these are resolved, it has the potential to become a powerful design solution for projects with a large number of pages.

## Key Features
- Page Factory Architecture: Dynamically manages page objects, allowing for scalable and maintainable code structure.
- Enhanced Step Definitions: Utilizes common steps (I click {string}, I see {string}, etc.) integrated with a central ElementActions class for efficient element interactions.
- Modular Design: Each page is represented by a distinct class derived from an InteractivePage base, facilitating easier updates and feature additions.
- Locator Management: Implements an abstract locatorsMap in each page class, streamlining element selectors' management and usage.

## Preparation

- Install Node.js with all extension
- Install firefox and chrome
- Java must be installed to run allure reports

Run `npm ci` to install all dependencies.

> You can use `npm install` as well.

## Configuring Environment

The environment is predefined in baseUrl in wdio.conf.ts

## Running tests

Use Cucumber Tags to define what would you like to run.
Tags can be used as logical expressions eg. `"@myTag1 and @myTag2 or @myTag3 and not @myTag4"`

Use the command `npm run desktopTags "@puppy"` to run all desktop tests using Cucumber Tags

Use the command `npm run desktopTags "@s[0-9]"` to run specific scenario from 1-9 eg `@s5`

## Debugging tests

option for WebStorm users:
1. "D debug": "wdio wdio.conf.desktop.ts --inspect --cucumberOpts.tagExpression '@X'",
2. Run specific script by clicking green arrow in line with your command
3. Voilà. Hope you'll find what you're looking for.

> You can find all commands inside `package.json` file.

## Reporting

To generate a report use `npm run generateAllureReport`

> This command generate clean report with your results from `allure-results` folder.

To open this report use `npm run openAllureReport`

> This command starting java server open generated report, type `ctrl+c` in terminal to stop server.

## Other info

- Project structure

````bash
├───src
│   ├───e2e
│   │   ├───features
│   │   ├───pages
│   │   │   ├───interactive-pages
│   │   └───steps
│   ├───utilities
└───types
````
## Further help

Visit the [WDIO Docs](https://webdriver.io/) to learn more.


