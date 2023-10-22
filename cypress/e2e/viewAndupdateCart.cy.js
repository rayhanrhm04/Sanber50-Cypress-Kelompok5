describe('View and Update Shopping Cart', () => {
    it('View Update Shopping Cart', () => {
      cy.visit('/customer/account/login');

      //Login with valid account
      cy.get('#email').type('rizkikiriz@gmail.com');
      cy.get('#pass').type('No123456');
      cy.get('#send2').click();

      
      cy.reload();//Refresh the page 

      //Click shopping cart
      cy.get('a.action.showcart').click();
      // cy.get('a.action.viewcart').click();

      //Edit shopping cart
      cy.get('a.action.action-edit').eq(0).click(); //Melakukan click pada item paling pertama
      cy.get('div#option-label-size-143-item-172.swatch-option.text').click();
      cy.get('div#option-label-color-93-item-50.swatch-option.color').click();
      cy.get('input#qty.input-text.qty').clear().type('2');
      cy.get('button#product-updatecart-button.action.primary.tocart').click();
    });

    //Try to delete item at shopping cart
    it('Delete item at shopping cart', () => {
      
      cy.visit('/customer/account/login');

      //Login with valid account
      cy.get('#email').type('rizkikiriz@gmail.com');
      cy.get('#pass').type('No123456');
      cy.get('#send2').click();

      cy.reload();//Refresh the page

      //Click shopping cart
      cy.get('a.action.showcart').click();
      // cy.get('a.action.viewcart').click();

      //Delete item
      cy.get('a.action.action-delete').eq(1).click();//Melakukan click pada item ke 2
    });
  });
  