/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
import BasePage from '../PageObjects/basepage'

const ELEMENTS = {    
    PRODUCT_PRICE : "span.price",
    COUPON_BOX : "#coupon_code",
    APPLY_BUTTON : "button[title='Apply']",
    SUCCESS_MESSAGE : ".success-msg span",
    GRAND_TOTAL : "strong > .price",
    REMOVE_BUTTON : "td[class='product-cart-total']+td>a",
    QTY_BOX : "input[title='Qty']",
    UPDATE_BUTTON : "button[title='Update']",
    QTY_MSG_ERROR : "p[class='item-msg error']"
    };

class ShoppingCartPage extends BasePage {
    verifyProductPriceInCart(price) {        
        this.verifyTextElement(ELEMENTS.PRODUCT_PRICE, price);    
    }
    typeDiscountCode(coupon) {
        this.typeIn(ELEMENTS.COUPON_BOX, coupon);
    }
    clickApplyButton() {
        this.clickOn(ELEMENTS.APPLY_BUTTON);
    }
    verifyDicountSuccessMessage(mgs) {
        this.verifyTextElement(ELEMENTS.SUCCESS_MESSAGE, mgs);
    }
    verifyGrandTotalPrice(price) {
        this.verifyTextElement(ELEMENTS.GRAND_TOTAL, price);
    }
    clickRemoveItemButton(){
        this.clickOn(ELEMENTS.REMOVE_BUTTON)
    }
    typeQuantity(qty) {
        this.typeIn(ELEMENTS.QTY_BOX, qty);
    }
    clickUpdateButton() {
        this.clickOn(ELEMENTS.UPDATE_BUTTON);
    }
    verifyQuantityErrorMessage(msg){
        this.verifyTextElement(ELEMENTS.QTY_MSG_ERROR,msg)
    }
}
export default ShoppingCartPage