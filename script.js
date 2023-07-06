const accessKey = "krsyjkA73T4_vDrNYQCo9wGr4AzqX_3UFIn2NMDut2Q";

const formElmt = document.querySelector("form");
const inputElement = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
async function searchImages(){
    inputData = inputElement;
    
    const url = `https://api.unsplash.com/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()

    const result = data.results;
    


}
