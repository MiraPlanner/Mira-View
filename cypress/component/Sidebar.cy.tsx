import * as React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { MemoryRouter } from 'react-router-dom'
import Layout from '../../src/layouts/Layout/Layout'

describe('ComponentName.cy.ts', () => {
  it('has collapsable sidebar', () => {
    cy.mount(
      <ProSidebarProvider>
        <MemoryRouter>
          <Layout children='' />
        </MemoryRouter>
      </ProSidebarProvider>,
    )
    cy.get('*[class^="Sidenav_Container"]').should((sidenav) =>
      expect(sidenav.width()).greaterThan(100),
    )

    cy.get('*[class^="SidenavButton_Button"]').should('be.visible').children().first().click()
    cy.get('*[class^="Sidenav_Container"]').should((sidenav) =>
      expect(sidenav.width()).lessThan(100),
    )

    cy.get('*[class^="SidenavButton_Button"]').children().first().click()
    cy.get('*[class^="Sidenav_Container"]').should((sidenav) =>
      expect(sidenav.width()).greaterThan(100),
    )
  })
})
