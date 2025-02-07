describe('Testes referentes a pagina de política de privacidade', () => {
    beforeEach( () => {
        cy.visit('src/privacy.html');
    })

    it('verifica título da página de política de privacidade', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de Privacidade');
    })

    it('verifica visibilidade de diretrizes de privacidade', () => {
        cy.get('.privacy').should('be.visible');
    })
})