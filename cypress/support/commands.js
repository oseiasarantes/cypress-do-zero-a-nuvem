Cypress.Commands.add('preecheCamposObrigatoriosESubmete', () =>{

    cy.get('#firstName').type('Osiris');
    cy.get('#lastName').type('Arantes');
    cy.get('#email').type('osiris@gmail.com');
    cy.get('#open-text-area').type('Feedibequi com sucesso');
    cy.contains('.button', 'Enviar').click();
});

Cypress.Commands.add('preencheCamposObrigatoriosComArgumentos', data => {

    cy.get('#firstName').type(data.firstName);
    cy.get('#lastName').type(data.lastName);
    cy.get('#email').type(data.email);
    cy.get('#open-text-area').type(data.text);
    cy.contains('.button', 'Enviar').click();
});

Cypress.Commands.add('preencheCamposComValoresObrigatoriosPadraoOuPorArgumento', (data = {
    firstName: 'Chico',
    lastName: 'de Alzira',
    email: 'chidodealzira@gmail.com',
    text: 'Comentario Teste',
}) => {

    cy.get('#firstName').type(data.firstName);
    cy.get('#lastName').type(data.lastName);
    cy.get('#email').type(data.email);
    cy.get('#open-text-area').type(data.text);
    cy.contains('.button', 'Enviar').click();
})