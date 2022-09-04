import {slowCypressDown} from 'cypress-slow-down'



slowCypressDown()

describe('Unit Testing', () => {

  it('Should visit home page', () => {
    cy.visit('/')
});

  it('Return the Cart Page', () => {
    cy.get('[data-cy="cart-item"]').click();
    cy.url('include', '/cart');
  })


  it.skip("Food Ordering Test", function() {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > [data-cy="Food-Card"]').click()
    cy.get('[data-cy="sizes"] > :nth-child(3)').click()
    cy.get('[type="checkbox"]').check()
    .first()
    .uncheck()
    cy.get('[data-cy="quantity"]').type('10')
    cy.get('[data-cy="Add-to-cart"]').click()
    cy.get('[data-cy="cart-item"]').click()
    cy.get('[data-cy="payment_button"]').click()
    cy.get('[data-cy="pay-in-cash"]').click()
    cy.get('[data-cy="name"]').type("19101440")
    cy.get('[data-cy="contact"]').type("666 222 333")
    cy.get('[data-cy="address"]').type('66, Mohakhali')
    cy.get('[data-cy="order"]').click()
  }) 

  it("Should allow the admin to login in with credentials", function() {
    cy.visit('http://localhost:3000/admin')
    cy.get('[placeholder="username"]').type('admin')
    cy.get('[placeholder="password"]').type('1234')
    cy.get('[data-cy="Login_button"]').click()
    cy.get(':last-child() > [data-cy="order"] > :last-child() > [data-cy="next"]').click()
  }) 

})