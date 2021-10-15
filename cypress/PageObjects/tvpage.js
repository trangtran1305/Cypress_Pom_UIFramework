/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
import Helper from '../utils/helper'
import BasePage from '../PageObjects/basepage'

const helper = new Helper();
const ELEMENTS = {    
    COMPARE_BUTTON : "button[title='Compare']",
    PRODUCT_COMPARE1 : "td:nth-child(2)>h2>a",
    PRODUCT_COMPARE2 : "td.last>h2>a", 
    }

class TvPage extends BasePage {

    addProductToCart(producName) {
        cy.addProductToCartByName(producName);
    
    } 
    addProductToCompare(producName) {
        cy.addProductToCompareByName(producName);
    
    } 
    clickCompareButton(){
        cy.window().then(win => {
            cy.spy(win, 'open').as('popup');
        });
        cy.get(ELEMENTS.COMPARE_BUTTON).click();
        cy.get('@popup').should('be.called');
        cy.window().then(win=>{
            win.location.href = Cypress.env("baseUrl") + 'index.php/catalog/product_compare/index/';
            cy.get('h1').should('have.text','Compare Products');
        })
        
    }
    verifyPopupCompareIsDisplayed(title){
        
        this.verifyTitle(title);
    }

    verifyComparedProducts(item1, item2){
        this.verifyTextElement(ELEMENTS.PRODUCT_COMPARE1,item1);
        this.verifyTextElement(ELEMENTS.PRODUCT_COMPARE2,item2);
    }
     
}
export default TvPage