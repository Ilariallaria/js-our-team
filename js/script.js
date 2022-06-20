const cards = [
    {
        image :"img/wayne-barnett-founder-ceo.jpg",
        firstName : "Wayne Bernet",
        jobTitle : "Founder & CEO",
    },
    {
        image :"img/angela-caroll-chief-editor.jpg",
        firstName : "Angela Caroll",
        jobTitle : "Chief Editor",
    },
    {
        image :"img/walter-gordon-office-manager.jpg",
        firstName : "Walter Gordon",
        jobTitle : "Office Manager",
    },
    {
        image :"img/angela-lopez-social-media-manager.jpg",
        firstName : "Angela Lopez",
        jobTitle : "Social Media Menager",
    },
    {
        image :"img/scott-estrada-developer.jpg",
        firstName : "Scott Estrada",
        jobTitle : "Developer",
    },
    {
        image :"img/barbara-ramos-graphic-designer.jpg",
        firstName : "Barbara Ramos",
        jobTitle : "Graphic Designer",
    },
]

const cardsContainer = document.querySelector(".team-container");

for(let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    const card = `
    <div class="team-card">
        <div class="card-image">
            <img src="${cards[i].image}" alt="Wayne Barnett"/>
        </div>

        <div class="card-text">
            <h3>${cards[i].firstName}</h3>
            <p>${cards[i].jobTitle}</p>
        </div>
    </div>`;

    cardsContainer.innerHTML += card;
}