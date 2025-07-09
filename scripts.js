const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')

let active = 0;
const total = items.length;

function update(direction) {
    // Remove classes atuais
    items[active].classList.remove('ativo');
    dots[active].classList.remove('active');

    // Atualiza índice com lógica circular
    active = (active + direction + total) % total;

    // Adiciona classes novas
    items[active].classList.add('ativo');
    dots[active].classList.add('active');
}

prevButton.addEventListener('click', () => {
    update(-1); // volta um item
});

nextButton.addEventListener('click', () => {
    update(1); // avança um item
});
