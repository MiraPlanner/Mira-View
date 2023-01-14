describe('The Backlog Page', () => {
  it('loads the page', () => {
    cy.visit('http://localhost:3000/backlog')
    cy.url().should('include', '/backlog')
  })

  it('contains the header', () => {
    cy.visit('http://localhost:3000/backlog')
    cy.get('*[class^="Header_Container"]').contains('Create')
    cy.get('*[class^="Header_Container"]').find('img').should('be.visible')
  })

  it('contains the sidebar', () => {
    cy.visit('http://localhost:3000/backlog')
    cy.get('*[class^="Sidenav_Container"]').get('*[class^="ps-menuitem-root"]*').contains('Backlog')
    cy.get('*[class^="Sidenav_Container"]').get('*[class^="ps-menuitem-root"]*').contains('Board')
    cy.get('*[class^="SidenavHeader_Container"]').contains('Milan Individual Project')
    cy.get('*[class^="SidenavHeader_Container"]').contains('Software project')
    cy.get('*[class^="SidenavHeader_ImageContainer"]').find('span').should('be.visible')
    cy.get('*[class^="SidenavFooter_Container"]').contains("You're in a team-managed project")
  })

  it('renders empty backlog', () => {
    cy.visit('http://localhost:3000/backlog')
    cy.get('*[class^="Backlog_Container"]').contains('Backlog')
    cy.get('*[class^="Backlog_Container"]').contains('Projects')
    cy.get('*[class^="Backlog_Container"]').contains('Milan Individual Project')
    cy.get('*[class^="Backlog_Container"]').contains('(0 issues)')
    cy.get('*[class^="Backlog_Container"]').contains('Create Sprint')
    cy.get('*[class^="Backlog_Container"]').contains('Create issue')
  })

  it('creates new sprint', () => {
    cy.visit('http://localhost:3000/backlog')
    cy.get('*[class^="ButtonCreateSprint_Enabled"]').click()
    cy.get('*[class^="Backlog_Sprints"]').contains('Sprint 0')
  })
})
