const butnEl = document.getElementById("butn");
const jokeEl = document.getElementById("joke");

const apiKey = "Ow/A5R+368gSl0RwXkJ+bQ==nh4ewDQWrgOEalvb";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
    jokeEl.innerText = "just a sec";
    butnEl.disabled = true;
    butnEl.innerText = "loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    butnEl.disabled = false;
    butnEl.innerText = "Press to get a joke";

    jokeEl.innerText = data[0].joke;
    }
    catch(error) {
        jokeEl.innerText = "An error occured. Please try again later.";
        console.log(error);
    }
} 

butnEl.addEventListener("click", getJoke)