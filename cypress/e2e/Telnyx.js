import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../Pages/mainPage.cy";

Given ("Open Telnyx page", () => {
    const mainPage = new MainPage()
        mainPage.navigate()
        mainPage.acceptButtonClick()   
});
When ("Click header button {string}", (nameButton) => {
    const mainPage = new MainPage()
        mainPage.clickHeaderButton(nameButton);
});
When ("Click main button {string}", (nameButton) => {
    const mainPage = new MainPage()
        mainPage.clickMainButton(nameButton);
});
When ("Click main button {string} in Powerful products box", (nameButton) => {
    const mainPage = new MainPage()
        mainPage.clickMainButtonInPowerfulProducts(nameButton);
});
When ("Click footer button {string}", (nameButton) => {
    const mainPage = new MainPage()
        mainPage.clickFooterButton(nameButton);
});
Then ("Check what went to {string} and go back", (namePage) => {
       cy.url().should('include', namePage);
       cy.go("back");
});

