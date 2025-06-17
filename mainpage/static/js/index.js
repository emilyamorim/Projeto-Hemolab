    const swiper = new Swiper('.swiper', {
        // Opções
        direction: 'horizontal',
        loop: true, // Faz o carrossel voltar ao início depois do último slide

        // Setas de navegação
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });