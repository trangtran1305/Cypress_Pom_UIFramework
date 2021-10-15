/// <reference types="cypress" />
import LoginPage from '../PageObjects/loginpage'
import HomePage from '../PageObjects/homepage'
import MyAccountPage from '../PageObjects/myaccountpage'
import MobilePage from '../PageObjects/mobilepage'
import ShoppingCartPage from '../PageObjects/shoppingcartpage'
import TvPage from '../PageObjects/tvpage'

const loginPage = new LoginPage();
const homePage = new HomePage();
const myAccountPage = new MyAccountPage();
const mobilePage = new MobilePage();
const tvPage = new TvPage();
const shoppingCartPage = new ShoppingCartPage();

describe('Smoke tests:', () => {
   beforeEach( ()=> {
      cy.visit(Cypress.env("baseUrl"));  
      homePage.clickAccountMenu();
      homePage.clickLoginLink();
      loginPage.verifyLoginPageIsDisplayed();
      cy.fixture('logindata.json').then(data => {
         loginPage.doLogin (data.email ,data.password);
      } ) ;
    } )

    it('TC01_Verify login with valid account', () => {      
      myAccountPage.verifyPageTitle('My Dashboard');
    } ) ;
    
    it('TC02_Verify cost of product in list page and shopping cart page are equal', () => {
      myAccountPage.clickMobileMenu();
      mobilePage.verifyProductPrice("Iphone","$500.00");
      mobilePage.addProductToCart("IPhone");
      shoppingCartPage.verifyProductPriceInCart("$500.00");
      shoppingCartPage.clickRemoveItemButton();
    } ) ;

    it('TC03_Verify discount coupon works correctly', () => {
      myAccountPage.clickMobileMenu();
      mobilePage.addProductToCart("Sony Xperia");
      shoppingCartPage.verifyProductPriceInCart("$100.00");
      shoppingCartPage.typeDiscountCode("GURU50");
      shoppingCartPage.clickApplyButton();
      shoppingCartPage.verifyDicountSuccessMessage('Coupon code "GURU50" was applied.');
      shoppingCartPage.verifyGrandTotalPrice("$100.00");
      shoppingCartPage.clickRemoveItemButton();
    } ) ;

    it('TC04_Verify can not add more maximum item', () => {      
      myAccountPage.clickMobileMenu();
      mobilePage.addProductToCart("Sony Xperia");
      shoppingCartPage.typeQuantity("501");
      shoppingCartPage.clickUpdateButton();
      shoppingCartPage.verifyQuantityErrorMessage("The maximum quantity allowed for purchase is 500.");
      shoppingCartPage.clickRemoveItemButton();
    } ) ;

    it('TC05_Verify to be able to compare 2 products', () => {      
      myAccountPage.clickTvMenu();
      tvPage.addProductToCompare("LG LCD");
      tvPage.addProductToCompare("Samsung LCD");
      tvPage.clickCompareButton();
      tvPage.verifyTitle("Products Comparison List - Magento Commerce");
      tvPage.verifyComparedProducts("LG LCD", "Samsung LCD");
    } ) ;
    
 } ) ;