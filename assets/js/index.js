const cards = document.querySelectorAll(".card-group .card");

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardBody = card.querySelector(".card-body");
    const btnBuy = card.querySelector(".btn-buy");

    cardBody.addEventListener("mouseenter", function() {
    btnBuy.style.display = "block";
});

    cardBody.addEventListener("mouseleave", function() {
    btnBuy.style.display = "none";
});
}

function openModal() {
    const windowModal = document.getElementById('window-modal') 
    windowModal.classList.add('open')

    windowModal.addEventListener('click', (e) => {
        if(e.target.id == 'buttonX' || e.target.id == 'window-modal'){
            windowModal.classList.remove('open')
        }
    })
}
