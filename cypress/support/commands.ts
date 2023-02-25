/// <reference types="cypress" />

Cypress.Commands.add(
  'classNameShould',
  { prevSubject: true },
  (subject, chainer, className) => {
    return cy.wrap(subject).invoke('attr', 'class').should(chainer, className);
  }
);

declare namespace Cypress {
  interface Chainable {
    classNameShould(chainer: string, className: string): Chainable;
  }
}