describe('Procees to Checkout', () => {
    it('Procees to Checkout', () => {
      cy.visit('/customer/account/login');

      cy.get('#email').type('rizkikiriz@gmail.com');
      cy.get('#pass').type('No123456');
      cy.get('#send2').click();

      
      cy.get('a.action.showcart').click();
     //barang harus ter input dahulu di website secara manual krna ada bagian anggota yg mendapatkan peran Choose Product
      cy.wait(1500);
      cy.get('ul.checkout.methods.items.checkout-methods-items li.item button.action.primary.checkout').click();
      cy.wait(4000);
      cy.get('button.button.action.continue.primary').click();
      cy.get('button.action.primary.checkout').click();

    });
  });
  