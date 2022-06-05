Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Luiz Felipe')
    cy.get('#lastName').type('Farias')
    cy.get('#email').type('emaildoluiz@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
