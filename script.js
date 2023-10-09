// initialize
const apiKey = "7eUsDrlU1pU8dtRZm0p9ZX2gjhbbtasBQBhEoZ4M1N1kndov0ltIJOx5";
let page_num = 1;

// curation generation
async function CuratedPhotos(page_num) {
  // set up for making API making a call
  const data = await fetch(
    `https://api.pexels.com/v1/curated?page=${page_num}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apiKey,
      },
    }
  );
  const response = await data.json();
  display_images(response);
}

// display images fetched from API
function display_images(response) {
  response.photos.forEach((image) => {
    const photo = document.createElement("div");
    photo.innerHTML = `<img src=${image.src.large}>`;
    document.querySelector(".gallery").appendChild(photo);
  });
}

CuratedPhotos(page_num);
