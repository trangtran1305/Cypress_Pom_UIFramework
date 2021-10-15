/// <reference types="cypress" />
// @ts-check
//Custom Commands
Cypress.Commands.add("addProductToCartByName", (productName) => { 

    cy.get("h2>a").each(($el, index, $list) => {
        if( $el.attr('title') == productName){
            cy.get("button[class='button btn-cart']").eq(index).click();
        }
    } )
} )

Cypress.Commands.add("addProductToCompareByName", (productName) => { 

    cy.get("h2>a").each(($el, index, $list) => {
        if( $el.attr('title') == productName){
            cy.get(".link-compare").eq(index).click();
        }
    } )
} )

Cypress.Commands.add("addProductToWishlistByName", (productName) => { 

    cy.get("h2>a").each(($el, index, $list) => {
        if( $el.attr('title') == productName){
            cy.get(".link-wishlist").eq(index).click();
        }
    } )
} )

Cypress.Commands.add("sumAllProductsPrice",(locator)=>{
    var  sum  =  0;
    cy.get(locator).each(($el, index, $list) =>{
        const  amount  =  $el.text()
        var res = amount.split(" ")
        var result = res[1].trim()  //trim to remove currency sign
        sum = Number(sum) + Number(result)
       }).then(()=>
       {
           return sum;
       } )
})
