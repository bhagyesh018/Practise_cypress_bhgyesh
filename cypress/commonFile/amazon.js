const element = require('../POM/amazonElement.json')


class amazon {
    openAmzonUrl(){
        cy.visit("https://www.amazon.in/")
    }
    verifyText(){
       return cy.get(element.headerText)
       .find(element.headerTextSub)
    }

}
module.exports = new amazon();