describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  });

  it('preenche os campos obrigatórios e envia o formulário', () => {  

    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10);

    cy.get('#firstName').type('Osiris'); //poderia ser usado o # para id
    cy.get('input[id="lastName"]').type('Arantes');
    cy.get('input[id="email"]').type('osiris@gmail.com');
    cy.get('textarea[id="open-text-area"').type(longText, {delay: 0});
  
    cy.get('input[type="radio"][value="ajuda"]').check();
    cy.get('input[type="checkbox"][value="email"').check();

    cy.get('button[type="submit"]').click();

    cy.get('.success').should('be.visible');
});


it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
  cy.get('#firstName').type('Teste');
  cy.get('#lastName').type('Email Errado');  
  cy.get('#email').type('email#errado.com');

  cy.get('button[type="submit"]').click();

  cy.get('.error').should('be.visible');
});

it('verifica se campo telefone apenas aceita valores numéricos', () => {
  cy.get('#phone')
    .type('abx-iie2')
    .should('be.empty');
});

it('exibe erro quando telefone é obrigatório, mas não é informado', () => {
  cy.get('#firstName').type('Osiris');
  cy.get('#lastName').type('Arantes');
  cy.get('#email').type('osiris@gmail.com');
  cy.get('textarea[id="open-text-area"').type('Dale que dale');

  cy.get('input[type="radio"][value="ajuda"]').check();
  cy.get('#phone-checkbox').check();

  cy.get('button[type="submit"]').click();

  cy.get('.error').should('be.visible');
});

it('preenche e lima os campos de nome, sobrenome, email e telefone', () => {
  cy.get('#firstName')
    .type('Osiris')
    .clear()
    .should('be.empty');

  cy.get('#lastName')
    .type('Arantes')
    .clear()
    .should(`be.empty`);

  cy.get('#email')
    .type('osiris@gmail.com')
    .clear()
    .should(`be.empty`);

  cy.get(`#phone`)
    .type(`83985446633`)
    .clear()
    .should(`be.empty`);
});

it(`deve exibir erro ao tentar enviar formulário sem preencher campos obrigatórios`, () => {

  cy.get('button[type="submit"]').click();

  cy.get('.error')
    .should('be.visible');

});

it('enviar um formulário usando um comando personalizável', () => {
  cy.preecheCamposObrigatoriosESubmete();
  cy.get('.success').should('be.visible');
});

it('enviar um formulário usando um comando personalizável que possui argumentos', () => {
  
  const data = {
    firstName: 'Osiris',
    lastName: 'Arantes',
    email: 'osiris@gmail.com',
    text: 'Comentario Teste',
  }

  cy.preencheCamposObrigatoriosComArgumentos(data);
  cy.get('.success').should('be.visible');
});


it('enviar um formulário usando um comando personalizável que possui argumentos', () => {
  cy.preencheValoresObrigatoriosPadraoOuEnviados();
  cy.get('.success').should('be.visible');
});

})