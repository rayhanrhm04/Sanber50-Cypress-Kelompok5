describe('Create an Account', ()=> {
    it('Visit Website Page', ()=> {
        //masuk ke dalam website
        cy.visit('/customer/account/create/');
        cy.title('eq', 'Create New Customer Account');
        // Cypress.on('uncaught:exception', () => { return false })
        //input form register
        cy.get('input[name="firstname"]').type('Ray');
        cy.get('input[name="lastname"]').type('Rahman');
        cy.get('input[name="email"]').type('rayhan1234@gmail.com');
        cy.get('input[name="password"]').type('NoPassword01');
        cy.get('input[name="password_confirmation"]').type('NoPassword01');
        //cek button create an account
        cy.get('button.action.submit').click();
    });
});