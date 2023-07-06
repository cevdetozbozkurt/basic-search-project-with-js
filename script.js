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

    const results = data.results;

    if (page === 1){
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        const image = document.createElement("img");
        const imageLink = document.createElement("a");
        imageWrapper.classList.add("search-result");
        image.src = results.urls.small;
        image.alt = results.alt_description;
        imageLink.href = results.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = results.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    });

    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}

formElmt.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", (event) =>{ 
    searchImages();
});
