describe('The Boards Page', () => {
  it('loads the page', () => {
    cy.visit('http://localhost:3000/boards')
    cy.url().should('include', '/boards')
  })

  it('contains the header', () => {
    cy.visit('http://localhost:3000/boards')
    cy.get('*[class^="Header_Container"]').contains('Create')
    cy.get('*[class^="Header_Container"]').find('img').should('be.visible')
  })

  it('contains the sidebar', () => {
    cy.visit('http://localhost:3000/boards')
    cy.get('*[class^="Sidenav_Container"]').get('*[class^="ps-menuitem-root"]*').contains('Backlog')
    cy.get('*[class^="Sidenav_Container"]').get('*[class^="ps-menuitem-root"]*').contains('Board')
    cy.get('*[class^="SidenavHeader_Container"]').contains('Milan Individual Project')
    cy.get('*[class^="SidenavHeader_Container"]').contains('Software project')
    cy.get('*[class^="SidenavHeader_ImageContainer"]').find('span').should('be.visible')
    cy.get('*[class^="SidenavFooter_Container"]').contains("You're in a team-managed project")
  })
})
