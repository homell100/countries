var grid = document.querySelector("#flag-grid");

function addCard(country){
    
    var card = document.createElement("div");
    var cardFlag = document.createElement("img");
    var cardInfo = document.createElement("div");
    var nameCountry = document.createElement("h3");
    var populationCountry = document.createElement("p");
    var regionCountry = document.createElement("p");
    var capitalCountry = document.createElement("p");

    // card.addEventListener('click', showModal);
    // cardInfo.addEventListener('click', showModal);
    // card.setAttribute("id", country.numericCode);
    cardFlag.setAttribute("src", country.flag);
    nameCountry.innerHTML = country.name;
    populationCountry.innerHTML = country.population;
    regionCountry.innerHTML = country.region;
    capitalCountry.innerHTML = country.capital;

    cardFlag.setAttribute("data-value", country.numericCode);
    cardInfo.setAttribute("data-value", country.numericCode);
    nameCountry.setAttribute("data-value", country.numericCode);
    populationCountry.setAttribute("data-value", country.numericCode);
    regionCountry.setAttribute("data-value", country.numericCode);
    capitalCountry.setAttribute("data-value", country.numericCode);

    grid.appendChild(card);
    card.appendChild(cardFlag);
    cardInfo.appendChild(nameCountry);
    cardInfo.appendChild(populationCountry);
    cardInfo.appendChild(regionCountry);
    cardInfo.appendChild(capitalCountry);
    card.appendChild(cardInfo);
}

function clearDOM(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    search.classList.toggle("dark-mode");
    region.classList.toggle("dark-mode");
}

function showModal(event){
    console.log(event);
    //Tenim el id
    //Fem consulta AJAX i busquem pais amb aquest id
    //Omplim el model dinamicament amb la informació del pais
    //Mostrem modal
}