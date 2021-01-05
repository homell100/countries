var urlAll="https://restcountries.eu/rest/v2/all"


function request(url,cb) {
    var xml = new XMLHttpRequest;

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            cb(JSON.parse(xml.responseText)) 
        }
    }
    xml.open("GET", url);
    xml.send();
}

