var api = 'https://restcountries.com/v3.1/name/italy';
var currCountry;
function getData(e) {
    e.preventDefault();
    const countryName = document.getElementById("search").value.trim();
    if (!countryName) {
        alert("Please enter a country name.");
        return;
      }
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
    request.send();
    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4) {  
            const data = JSON.parse(request.response);
            const country = data[0];

            // console.log("Country:", country.name.common);
            // console.log("Official Name:", country.name.official);
            // console.log("Capital:", country.capital);
            // console.log("Population:", country.population);
            // console.log("Currency:", Object.values(country.currencies)[0]);
            // console.log("Flag URL:", country.flags.png);

            currCountry = country;
            display();
        }
    });
}
document.querySelector('form').addEventListener('submit', getData);

function display() {
    var main = document.querySelector("main");
    main.innerHTML = "";
    var card = document.createElement("div");
    card.classList.add("card");
    var flageURL = document.createElement("img");
    flageURL.src = currCountry.flags.png;
    var countryName = document.createElement("h4");
    var OfficialName = document.createElement("h5")
    countryName.innerText = currCountry.name.common;
    OfficialName.innerText = currCountry.name.official;

    var capital = document.createElement("h6")
    capital.innerText = currCountry.capital;

    var population = document.createElement("h6")
    population.innerText = currCountry.population;

    var currency = document.createElement("h6")
    currency.innerText = Object.values(currCountry.currencies)[0].name;
    main.append(card);
    countryName.classList.add("countryName");
    OfficialName.classList.add("OfficialName");
    capital.classList.add("capital");
    population.classList.add("population");
    currency.classList.add("currency");
    card.append(flageURL,countryName,OfficialName,capital,population,currency);
 

}
