/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
import Helper from '../utils/helper'
import BasePage from '../PageObjects/basepage'

const helper = new Helper();
const ELEMENTS = {    
    PRODUCT_PRICE : "a[title='{0}']+div span.price>font>font"
    }

class MobilePage extends BasePage {
    verifyProductPrice(producName,price) {
        var priceLocator = helper.formatString(ELEMENTS.PRODUCT_PRICE, producName);
        this.verifyTextElement('#product-price-2 > .price',price);    
    } 
    addProductToCart(producName) {
        cy.addProductToCartByName(producName);
    } 
}
export default MobilePage