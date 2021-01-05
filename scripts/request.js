var xml = new XMLHttpRequest;

xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200){
        console.log(xml.responseText);

        /* flag
        *name
        * population 
        * region
        * capital
        */
    }
}

xml.open("GET", "https://restcountries.eu/rest/v2/all");
xml.send();