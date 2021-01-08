var grid = document.querySelector("#flag-grid");
var modal=document.querySelector("#modal")
modal.classList.add("hidden")
function addCard(country){
    var card = document.createElement("div");
    var cardFlag = document.createElement("img");
    var cardInfo = document.createElement("div");
    var nameCountry = document.createElement("h3");
    var populationCountry = document.createElement("p");
    var regionCountry = document.createElement("p");
    var capitalCountry = document.createElement("p");

    card.addEventListener('click', showModal);
    card.setAttribute("id", country.name);
    cardFlag.setAttribute("src", country.flag);
    nameCountry.innerHTML = country.name;
    populationCountry.innerHTML = country.population;
    regionCountry.innerHTML = country.region;
    capitalCountry.innerHTML = country.capital;

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
    console.log(event.currentTarget.id);
    var countryName=event.currentTarget.id
    modal.classList.remove("hidden")

    request(urlName+countryName,infoCountry);

    function infoCountry(country){
    
        console.log(country)

        var imgCountry=document.querySelector("#img-country")
        var borderCountries=document.querySelector("#border-countries")
        var nameCountry=document.querySelector("#name-country")
        var nativeName=document.querySelector("#native-name")
        var population=document.querySelector("#population")
        var region=document.querySelector("#region")
        var subRegion=document.querySelector("#sub-region")
        var capital=document.querySelector("#capital")
        var levelDomain=document.querySelector("#level-domain")
        var currencies=document.querySelector("#currencies")
        var languages=document.querySelector("#languages")
        
        
        imgCountry.src=country[0].flag
        nameCountry.innerHTML=country[0].name
        nativeName.innerHTML=country[0].nativeName
        population.innerHTML=country[0].population
        region.innerHTML=country[0].region
        subRegion.innerHTML=country[0].subregion
        capital.innerHTML=country[0].capital
        levelDomain.innerHTML=country[0].topLevelDomain[0]
        
        for(var currencie of country[0].currencies){
            console.log(currencie)
            var currencie=","
            currencies.innerHTML+=currencie.code+str
        }
        
        for(var borderCountry of country[0].borders){
            borderCountries.innerHTML+=borderCountry
        }
        
        //languages=




    }
    //Tenim el id
    //Fem consulta AJAX i busquem pais amb aquest id
    //Omplim el model dinamicament amb la informació del pais
    //Mostrem modal
}