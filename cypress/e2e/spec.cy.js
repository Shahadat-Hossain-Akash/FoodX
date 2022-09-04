
describe('nav', () => {

  it('Should visit home page', () => {
    cy.visit('/')
});

  it('Return the Cart Page', () => {
    cy.get('[data-cy="cart-item"]').click();
    cy.url('include', '/cart');
  })
})