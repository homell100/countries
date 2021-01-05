

function addCard(country){
    var grid = document.querySelector("#flag-grid");

    var card = document.createElement("div");
    var cardFlag = document.createElement("img");
    var cardInfo = document.createElement("div");

    cardFlag.setAttribute("src", country.flag);

    //card.classList.add("flex");

    card.appendChild(cardFlag);
    card.appendChild(cardInfo);
}