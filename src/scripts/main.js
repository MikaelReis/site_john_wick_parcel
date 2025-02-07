AOS.init();
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('.saga__list');
    const questions = document.querySelectorAll('[data-faq-question]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = button.getAttribute('data-tab-button');

            // Esconde todas as abas
            tabs.forEach(tab => tab.classList.remove('saga__list--is-active'));

            // Ativa a aba correta
            document.querySelector(`[data-tab-id=${targetTab}]`).classList.add('saga__list--is-active');

            // Remove a classe ativa dos botões
            buttons.forEach(btn => btn.classList.remove('saga__tabs__button--is-active'));

            // Adiciona a classe ativa ao botão clicado
            button.classList.add('saga__tabs__button--is-active');
        })
    })
    
    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}


