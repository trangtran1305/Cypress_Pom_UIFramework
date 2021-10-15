/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      addProductToCartByName(productName:string): Chainable<any>  
  }
    interface Chainable<Subject> {
      addProductToCompareByName(productName:string): Chainable<any>  
}
    interface Chainable<Subject> {
      addProductToWishlistByName(productName:string): Chainable<any>  
}
  }