
var search = document.querySelector("#search");
search.addEventListener('input', searchCountry);

var region = document.querySelector("#regions");
region.addEventListener('change', searchRegion);

request(urlAll,selectCountries);


function selectCountries(allCountries){
    for (country of allCountries){
        addCard(country)
    }
}


function searchCountry(event){
 
    clearDOM();
    request(urlAll, filterCountries);
    
    function filterCountries(allCountries){
        var searchCountries = allCountries.filter(country => country.name.toLowerCase().includes(event.target.value));
        console.log(event.target.value);
        console.log(searchCountries);
        for(country of searchCountries){
            addCard(country);
        }
    }
}

function searchRegion(event){
    clearDOM();
    request(urlAll, filterRegion);
}
