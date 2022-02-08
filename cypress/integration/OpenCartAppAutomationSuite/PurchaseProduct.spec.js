/// <reference types="cypress" />

describe('Order Product', () => {
    it('Order a new product ', () => {
        cy.visit('')
        cy.fixture('productDetails').then((details) => {
            cy.searchProduct(details.monitorName)
        })
       cy.addProductToCart() 
       cy.get('div#product-product > div.alert-success').should('contain','Success: You have added')
    })
})