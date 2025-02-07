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

it('seleciona o produto Youtube da lista, pelo texto', () => {
  cy.get('#product').select('YouTube').should('have.value', 'youtube');
})

it('seleciona o produto Mentoria da lista, pelo value', () => {
  cy.get('#product').select('mentoria').should('have.value', 'mentoria');
})

it('seleciona o produto Blog da lista, pelo índice', () => {
  cy.get('select').select(1).should('have.value', 'blog');
})

it('marca o campo radio para os tipos presentes', () => {
  cy.get('input[value="ajuda"]').check().should('have.value', 'ajuda');
  cy.get('input[value="elogio"]').check().should('be.checked', 'elogio');
  cy.get('input[value="feedback"]').check().should('have.value', 'feedback');
})

it('marca cada campo radio com each ou wrap', () => {
  cy.get('input[type="radio"]')
  .each( elementoRadio => {
    cy.wrap(elementoRadio).check().should('be.checked')
  })
})

it('marca ambos os checkboxes e depois desmarca o ultimo', () => {
  cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last().uncheck()
    .should('not.be.checked');
})

it('seleciona arquivo', () => {
  cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .should(input => {
      expect(input[0].files[0].name).to.equal('example.json');
    });
})

it('seleciona um arquivo com a função drag-drop', () => {
  cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(inputObject => {
      expect(inputObject[0].files[0].name).to.equal('example.json');
    })
})

it('seleciona um arquivo com um alias para uma fixture', () => {
  cy.fixture('example.json').as('sampleFile');

  cy.get('#file-upload')
    .selectFile('@sampleFile')
    .should(inputObject => {
      expect(inputObject[0].files[0].name).to.equal('example.json');
    })
})

it('acessa nova página de política de privacidade removendo o target', () => {
  cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target').click();
  cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de Privacidade');
})

})