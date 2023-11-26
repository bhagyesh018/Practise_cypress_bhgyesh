/// <reference types= "cypress" />
require('cypress-xpath')

const commonUseCase = require('../../commonFile/amazon')
const element = require('../../POM/amazonElement.json')

describe("amazon", () => {
    before("open amazon webside", () => {
        commonUseCase.openAmzonUrl()
    })

    it("Test dropdown", () => {
        cy.get(element.dropDownIdCss).select("Jewellery", { force: true })
        cy.get(element.searchBarId).type("Gold")
            .type('{enter}')
        commonUseCase.verifyText().should('have.text', 'Pure Gold Pendants')
        cy.get(element.searchBarId).clear().type("silver").type('{enter}')
        commonUseCase.verifyText().should('have.text', 'Colloidal Silver Supplement By Asterveda')
    })
})