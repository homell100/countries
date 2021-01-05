var grid = document.querySelector("#flag-grid");

function addCard(country){
    
    var card = document.createElement("div");
    var cardFlag = document.createElement("img");
    var cardInfo = document.createElement("div");
    var nameCountry = document.createElement("h3");
    var populationCountry = document.createElement("p");
    var regionCountry = document.createElement("p");
    var capitalCountry = document.createElement("p");

    cardFlag.setAttribute("src", country.flag);
    nameCountry.innerHTML = country.name;
    populationCountry.innerHTML = country.population;
    regionCountry.innerHTML = country.region;
    capitalCountry.innerHTML = country.capital;

    grid.appendChild(card);
    card.appendChild(cardFlag);
    cardInfo.appendChild(nameCountry)
    cardInfo.appendChild(populationCountry)
    cardInfo.appendChild(regionCountry)
    cardInfo.appendChild(capitalCountry)
    card.appendChild(cardInfo);
}

function clearDOM(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

