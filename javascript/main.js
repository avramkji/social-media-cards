const increment = 4;
let counter = 0;

const create_card_header = (profile_image, name, date, source_type) => {
    const card_header = document.createElement("header");
    card_header.classList.add("card-header");
    card_header.innerHTML = `
        <div class="header-avatar-box">
            <img alt="Avatar" class="avatar">
            <div class="avatar-text-box">
                <h2 class="avatar-name"></h2>
                <p class="avatar-date"></p>
            </div>
        </div>
        <div class="header-icon">
            <img alt="Icon" class="icon">
        </div>`
    card_header.querySelector(".avatar").src = profile_image;
    card_header.querySelector('.avatar-name').innerText = name;
    card_header.querySelector('.avatar-date').innerText = date;

    // choose icon based on source_type string.
    switch (source_type) {
        case "facebook":
            card_header.querySelector('.icon').src = "./assets/facebook.svg";
            break;
        default:
            card_header.querySelector('.icon').src = "./assets/instagram-logo.svg";
            break;
    }


    return card_header;
}

const create_card_body = (card_image, caption) => {
    const card_body = document.createElement('section');
    card_body.classList.add("card-body");
    card_body.innerHTML = `
    <div class="card-image">
        <img alt="image">
    </div>
    <div class="card-content">
        <p class="content-text"></p>
    </div>`

    card_body.querySelector('img').src = card_image;
    card_body.querySelector('.content-text').innerText = caption;

    return card_body;
}


const create_card_footer = (likes) => {
    const card_footer = document.createElement('footer');
    card_footer.classList.add("card-footer");
    card_footer.innerHTML = `
        <ul class="likes-box">
            <li><img alt="heart" class="heart"></li>
            <li class="likes"></li>
        </ul>`
    card_footer.querySelector('.heart').src = "./assets/heart.svg";
    card_footer.querySelector('.likes').innerText = likes;


    return card_footer;
}

const create_card = (index) => {

    const card_header = create_card_header(data[index].profile_image, data[index].name, data[index].date, data[index].source_type)
    const card_body = create_card_body(data[index].image, data[index].caption)
    const card_footer = create_card_footer(data[index].likes)

    const card = document.createElement('article');
    card.classList.add("card");
    card.appendChild(card_header);
    card.appendChild(card_body);
    card.appendChild(card_footer);

    return card;
}

const render_cards = (index) => {
    for (let i = index; i < index + increment; i++) {
        if (i <= data.length) {
            const card = create_card(i);
            document.querySelector('.cards-container').appendChild(card);
            counter++;
        } else {
            return counter;
        }
    }

    return counter++;
}

console.log(render_cards(counter));

const load_more = () => {
    if (counter < data.length) {
        render_cards(counter);
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
            let card = document.querySelectorAll('.card-body img');
            card.forEach((el, i) => {
                el.addEventListener('click', function() {
                    create_modal(i);
                });
            });
        }, 250);
    }
}

const post_liked = (target) => {
    target.classList.contains('liked') ? target.classList.remove('liked') : target.classList.add('liked');

    const likes = target.parentElement.parentElement.querySelector('.likes');

    if (target.classList.contains('liked')) {
        likes.innerText = parseInt(likes.innerText) + 1;
    } else {
        likes.innerText = parseInt(likes.innerText) - 1;
    }

}

window.onclick = (event) => {
    if (event.target.classList.contains('button-more')) {
        load_more();
    }
    console.log(event.currentTarget);
    if (event.target.classList.contains('heart')) {
        
        post_liked(event.target);
    }
    if (event.target.classList.contains('overlay') && event.target.classList.contains('show')) {
        let body = document.querySelector('body');
        let overlay = document.querySelector('.overlay');
        let modal = document.querySelector('.modal');
        body.removeChild(overlay);
        body.removeChild(modal);
    }



}



// [] - remove "load more" button when there are no more cards to load
// [] - create a modal window which should be opened when the user clicks on any card