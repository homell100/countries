request(urlAll,showCountries);


function showCountries(countries){
    for (country of countries){
        addCard(country)
    }
}

var search = document.querySelector("#search");
search.addEventListener('input', searchCountries);

var region = document.querySelector("#regions");
region.addEventListener('change', searchCountries);

function searchCountries(){
    clearDOM();
    request(urlAll, filter);
}

function filter(allCountries){
        
    var searchCountries = allCountries.filter(country => country.name.toLowerCase().includes(search.value.toLowerCase()));
    var searchRegion =  region.value != "all" ? searchCountries.filter(country => country.region.toLowerCase().includes(region.value)) : searchCountries;
    showCountries(searchRegion);
}

var darkMode = document.querySelector("#dark-mode");
darkMode.addEventListener("mouseover", changePointer)
darkMode.addEventListener('click', toggleDarkMode)

function changePointer(event){
    event.target.classList.add("pointer");
}


