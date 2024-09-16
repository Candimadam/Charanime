function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

async function getCharacterById(characterId) {
  const container = document.getElementById("container");

  const response = await fetch(
    `https://api.jikan.moe/v4/characters/${findGetParameter("id")}/full`
  );
  const data = await response.json();
  const result = data.data;
  console.log(result);

  // looping element
  container.innerHTML += `<div>
  <div class="card" style="width: 18rem;">
    <img src="${result.images.jpg.image_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${result.name}</h5>
      <p class="card-text">${result.about}</p>
      <a href="index.html" class="btn btn-primary">Back</a>
    </div>
  </div>
  </div>`;
}

getCharacterById("188037");
