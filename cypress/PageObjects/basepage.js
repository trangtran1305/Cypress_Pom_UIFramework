
class BasePage {
   
    waitTillElementIsDisplayed(locator) {
        return cy.get(locator).should('be.visible');
        }    

    elementShouldNotExist(locator) {      
        return cy.get(locator).should('not.exist');        
    }

    typeIn(locator, text) {
        this.waitTillElementIsDisplayed(locator).clear().type(text);
    }

    clickOn (locator)  {
        return this.waitTillElementIsDisplayed(locator).click();
    }

    check(locator) {
        this.waitTillElementIsDisplayed(locator).check();
    }

    selectValue(dropDownButtonLocator, dropDownInputLocator, value) {
        this.clickOn(dropDownButtonLocator);
        this.waitTillElementIsDisplayed(dropDownInputLocator)
            .click({force: true})
            .type(value)
            .type('{enter}');
    }

    verifyTextElement(locator, text) {
        this.waitTillElementIsDisplayed(locator).then(($el) => {
            expect($el[0]).to.contain.text(text);
    })
    }

    verifyTitle(text) {
        return cy.title().should('eq', text);
    }
}

export default BasePage;