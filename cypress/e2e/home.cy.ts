describe('The Home Page', () => {
  it('redirects to the backlog page', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/backlog')
  })
})
