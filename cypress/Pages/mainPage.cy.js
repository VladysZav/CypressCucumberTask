export  class MainPage{
    navigate = () => {
        cy.visit("https://telnyx.com/")
        }
    acceptButtonClick= () => cy.contains('button', 'Accept and close').click()

    clickHeaderButton(NameButton){
        cy.contains("header span a", NameButton).click({ force: true })
    }
    clickMainButton(NameButton){
        cy.contains("main div a", NameButton).scrollIntoView().click({ force: true })
    }
    clickMainButtonInPowerfulProducts(NameButton){
        cy.contains("main div h3", NameButton).scrollIntoView().click({ force: true })
    }
    clickFooterButton(NameButton){
        cy.contains("footer div ul span span", NameButton).scrollIntoView().click({ force: true })
    }
}