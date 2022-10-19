import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../Pages/mainPage.cy";
const mainPage = new MainPage();

Given ("Open Telnyx page", () => {
        mainPage.navigate()
        mainPage.acceptButtonClick()   
});
When ("Click header button {string}", (nameButton) => {
        mainPage.clickHeaderButton(nameButton);
});
When ("Click main button {string}", (nameButton) => {
        mainPage.clickMainButton(nameButton);
});
When ("Click main button {string} in Powerful products box", (nameButton) => {
        mainPage.clickMainButtonInPowerfulProducts(nameButton);
});
When ("Click footer button {string}", (nameButton) => {
        mainPage.clickFooterButton(nameButton);
});
Then ("Check what went to {string} and go back", (namePage) => {
       cy.url().should('include', namePage);
       cy.go("back");
});

