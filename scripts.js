//script cypress chercher iphone 14
describe('my seconde test', function () {
    it ('open web page', function (){
        cy.visit('https://www.amazon.com')
        cy.viewport(1920,1080)
        cy.get("input[type='text']").type("iphone 14{enter}")
        cy.scrollTo(0,3000)
        cy.contains('Apple iPhone 14 Pro Max, 128GB, Deep Purple for T-Mobile (Renewed)').click()
        cy.viewport(1920,1080)
        cy.get('#a-autoid-0-announce').click()
        cy.get('#quantity_4').click()
        cy.viewport(960,540)

        cy.get('#fbtCheck-1').uncheck()
        cy.get('#fbtCheck-2').uncheck()
        cy.get('#add-to-cart-button').click()
        cy.get(".a-button-text[href='/gp/cart/view.html?ref_=sw_gtc']").click()

        cy.get("input[value='Proceed to checkout']").click()

    })
})