// Fungsi untuk mengambil karakter berdasarkan input pengguna
async function getCharacter() {
  const inputValue = document.getElementById("search").value;
  const container = document.getElementById("container");

  const response = await fetch(
    "https://api.jikan.moe/v4/characters?q=" +
      inputValue +
      "&order_by=favorites&sort=desc"
  );
  const data = await response.json();

  container.innerHTML = "";

  data.data.map((anime) => {
    const id = anime.mal_id;
    const nama = anime.name;
    const foto = anime.images.jpg.image_url;
    const about = anime.about;

    container.innerHTML += `<div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nama}</h5>
                <p class="card-text overflow-auto" style="height: 100px">${
                  about === null ? "gak ada" : about
                }</p>
                <a href="index2.html?id=${id}" class="btn btn-primary">See more</a>
            </div>
        </div>
    </div>`;
  });
}

// Fungsi untuk mengambil karakter default saat halaman pertama kali dimuat
async function getInitCharacter() {
  const container = document.getElementById("container");

  const response = await fetch(
    "https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc&limit=10"
  );
  const data = await response.json();

  container.innerHTML = "";

  data.data.map((anime) => {
    const id = anime.mal_id;
    const nama = anime.name;
    const foto = anime.images.jpg.image_url;
    const about = anime.about;

    container.innerHTML += `<div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nama}</h5>
                <p class="card-text overflow-auto" style="height: 100px">${
                  about === null ? "gak ada" : about
                }</p>
                <a href="index2.html?id=${id}" class="btn btn-primary">See more</a>
            </div>
        </div>
    </div>`;
  });
}

// Event listener untuk pencarian karakter saat tombol Enter ditekan
document.getElementById("search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action, if necessary
    getCharacter();
  }
});

// Panggil fungsi getInitCharacter saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  getInitCharacter();
});
