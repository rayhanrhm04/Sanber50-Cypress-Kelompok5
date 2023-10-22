describe('View and Update Shopping Cart', () => {
    it('View and Update Shopping Cart', () => {
      cy.visit('/customer/account/login');

      cy.get('#email').type('rizkikiriz@gmail.com');
      cy.get('#pass').type('No123456');
      cy.get('#send2').click();

      cy.reload();
      cy.get('a.action.showcart').click();
      // cy.reload();
      // cy.get('a.action.showcart').click();
      // cy.get('a.action.viewcart').click();
      cy.get('input#cart-399174-qty.input-text.qty').clear().type('2');

      cy.get('button.action.update').click();
    });
  });
  