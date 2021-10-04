// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getRef', (ref) => cy.get(`[data-spec-id=${ref}]`));

Cypress.Commands.add('getNestedRef', (...selector) => {
  const [ref, ...rest] = selector;

  return cy.get(`[data-spec-id=${ref}] ${rest.join()}`);
});
