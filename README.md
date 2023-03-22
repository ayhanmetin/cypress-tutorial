# Cypress End-to-End Testing Tutorial

Udemy Course - Academind

Learn how to use Cypress to design, build and run powerful and realistic end-to-end (E2E) tests with ease.

```powershell

# go to project folder

npm install
npm run dev
npx cypress run (run in headless mode)
npx cypress open

to get auto cypress auto completion add to top of test file: 
/// <reference types="Cypress" />

```

To create a new E2E test, follow these steps:

    Click "E2E testing" in the Cypress Test Runner.
    Click "Start E2E Testing in chrome".
    Click "New Spec".
    This will create a cypress/ folder in your project directory.
    Tests run in isolation.
    The official recommended way to select elements from the DOM is to use data-attribute selectors.
    Use the Cypress Selector Playground in the browser to hover over elements and get the best selector.
    You can use constants to store cy DOM queries, but it's preferable to use .as().
    Cypress gives each test step a 4-second timeframe to run assertions.
