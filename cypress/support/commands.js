
Cypress.Commands.add('login', () => {
    cy.visit("/", { timeout: 30000 })
    cy.get('.ant-btn').click({ timeout: 30000 })
    cy.get('#normal_login_username', { timeout: 30000 }).should('be.visible').type('appadmin')
    cy.get('#normal_login_password', { timeout: 30000 }).should('be.visible').type('123456789')
    cy.get('.innos-ui-button', { timeout: 30000 }).should('be.visible').click({ timeout: 30000 })
  })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
