class GameUI {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  renderLoading() {
    this.container.innerHTML = `
  <div class="text-center my-5">
    <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mt-3 fs-5">Loading...</p>
  </div>
`;
  }

  hideLoading() {
    this.container.innerHTML = "";
  }

  renderGames(games) {
    this.container.innerHTML = "";
    games.forEach((game) => {
      const col = document.createElement("div");
      col.className = "col-md-3 col-sm-6";

      col.innerHTML = `
        <div class="card h-100">
          <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${game.title}</h5>
            <p class="card-text small">${game.short_description
              .split(" ")
              .slice(0, 10)
              .join(" ")}...</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="badge bg-secondary">${game.genre}</span>
              <span class="badge bg-primary">Free</span>
            </div>
          </div>
        </div>
      `;

      col.addEventListener("click", () => {
        localStorage.setItem("selectedGame", JSON.stringify(game));
        window.location.href = "details.html";
      });

      this.container.appendChild(col);
    });
  }
}
