let card = document.querySelectorAll('.card-body img');
card.forEach((el, i) => {
    el.addEventListener('click', function() {
        create_modal(i);
    });
});

const create_modal = (i) => {
    let body = document.querySelector('body');
    let cardModal = document.createElement('div');
    let bodyOverlay = document.createElement('div');
    bodyOverlay.classList.add('overlay');
    bodyOverlay.classList.add('show');
    cardModal.classList.add('modal');
    cardModal.classList.add('show');
    body.appendChild(cardModal);
    body.appendChild(bodyOverlay);
    cardModal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
        </div>
        <div class="modal-body">
            <div class="modal-img">
            <img alt="image" class="modal-image">
            </div>
            <div class="modal-desc">
            <div class="card-header">
                    <div class="header-avatar-box">
                        <img alt="Avatar" class="avatar">
                        <div class="avatar-text-box">
                            <h2 class="avatar-name"></h2>
                            <p class="avatar-date"></p>
                        </div>
                    </div>

                <div class="header-icon">
                    <img alt="Icon" class="icon">
                </div>
            </div>
            <p class="modal-caption"></p>
            <ul class="likes-box">
                <li><img alt="heart" class="heart"></li>
                <li class="likes"></li>
            </ul>
            </div>
        </div>
   
    </div>`
    console.log(data[i]);

    // cardModal.querySelector('.modal-title').innerText = data[i].name;
    cardModal.querySelector('.avatar').src = data[i].profile_image;
    cardModal.querySelector('.avatar-name').innerText = data[i].name;
    cardModal.querySelector('.avatar-date').src = data[i].date;
    // choose icon based on source_type string.
    switch (data[i].source_type) {
        case "facebook":
            cardModal.querySelector('.icon').src = "./assets/facebook.svg";
            break;
        default:
            cardModal.querySelector('.icon').src = "./assets/instagram-logo.svg";
            break;
    }
    cardModal.querySelector('.modal-image').src = data[i].image;
    cardModal.querySelector('.modal-caption').innerText = data[i].caption;
    cardModal.querySelector('.likes').innerText = data[i].likes;
    cardModal.querySelector('.heart').src = "./assets/heart.svg";
    cardModal.querySelector('.close').addEventListener('click', () => {
            cardModal.style.display = "none";
        })
        // return modal;

}