/// <reference types="cypress" />

import dadosPage from '../support/page_objects/dados.page'
const dadosEndereco = require('../fixtures/endereco.json')



describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
       
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/page/49')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        cy.addProdutos('Teton Pullover Hoodie', 'XS', 'Black', 2)
        cy.visit('/produtos/page/49')    
        cy.addProdutos('Thorpe Track Pant', 32, 'Black', 2)
        cy.visit('/produtos/page/49')
        cy.addProdutos('Tiberius Gym Tank', 'M', 'Yellow', 5)
        cy.visit('/produtos/page/49')
        cy.addProdutos('Torque Power Short', '36', 'Gray', 3)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        cy.get('#billing_first_name').clear().type('Renan')
        cy.get('#billing_last_name').clear().type('Veras')
       
        dadosPage.Checkout( 
            
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email

        )


        cy.get('#terms').click()
        cy.get('#place_order').click()

        
        
    });


})