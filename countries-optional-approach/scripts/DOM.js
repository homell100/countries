var grid = document.querySelector("#flag-grid");
var modal=document.querySelector("#modal")
var modalSection=document.querySelector("#modal-section")
var svgButton=document.querySelector("#svg")
var modalBg=document.querySelector("#modal-bg")

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
    populationCountry.innerHTML = "<strong>Population: </strong>"+country.population;
    regionCountry.innerHTML = "<strong>Region: </strong>"+country.region;
    capitalCountry.innerHTML = "<strong>Capital: </strong>"+country.capital;
    
    card.classList.add("h-96")
    cardInfo.classList.add("shadow-md","p-6","h-1/2")
    nameCountry.classList.add("text-xl","font-bold","pb-6")

    cardFlag.classList.add("h-1/2","w-full","object-cover")

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
    modalSection.classList.toggle("bg-white")
    modalSection.classList.toggle("bg-gray-700")
    modal.classList.toggle("dark-mode");
    svgButton.classList.toggle("filter")
    modalBg.classList.toggle('bg-gray-800')
    
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
        
        var tempCurrencie=[]
        for(var currencie of country[0].currencies){
            tempCurrencie.push(currencie.code)
        }
        currencies.innerHTML = tempCurrencie.join(",");
        

        var tempBorder=[]
        for(var borderCountry of country[0].borders){
            tempBorder.push(borderCountry)
        }
        borderCountries.innerHTML = tempBorder.join(",");
        
        var tempLanguages=[]
        for(var language of country[0].languages){
            tempLanguages.push(language.name)
        }
        languages.innerHTML = tempLanguages.join(",");


    }
}