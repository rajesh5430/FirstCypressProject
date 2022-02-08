import LandingPage from "../pageObjects/LandingPage"

const landingPage = new LandingPage()
Cypress.Commands.add('searchProduct',(productToSearch) =>{
   
    cy.contains(landingPage.desktopMenuItem).click()
    cy.contains(landingPage.macMenuItem).click()
    cy.get(landingPage.listOfProducts).then((productList) =>{
        cy.wrap(productList.find('h4 > a')).click()
       
    })

})

Cypress.Commands.add('addProductToCart',()=>{
    cy.get(landingPage.addToCartBtn).click()
})