/// <reference types="cypress" />

const { color } = require("ansi-styles")

context('Main test', () => {
    before(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('get a new div injected on a click of the button and check its size and colour', () => {
        cy.get('#but1').click()
        cy.get('#content').find('.newDiv')
            .should('have.css', 'background-color').and('eq', 'rgb(255, 0, 0)')
        cy.get('#content').find('.newDiv')    
            .should('have.css', 'width').and('eq', '300px')
    })
  
    it('get scrolling and check colour change', () => {
        cy.scrollTo(0, 400)
        cy.get('#content').find('.newDiv')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(0, 128, 0)')
    })

    it('get one more div and check it is sticly after scroll', () => {
        cy.get('#but2').click()
        cy.scrollTo(0, 1000)
        cy.get('#content').find('.sticky')
            .should('be.visible')
            
    })
  })