class GameApp {
  constructor() {
    this.api = new GameService();
    this.ui = new GameUI("gameContainer");
    this.init();
    this.addCategoryEvents();
  }

  async init() {
    this.ui.renderLoading();
    const games = await this.api.getGamesByCategory("mmorpg");
    console.log("Games loaded:", games);
    this.ui.renderGames(games);
  }

  addCategoryEvents() {
    document
      .getElementById("categoryList")
      .addEventListener("click", async (e) => {
        if (e.target.tagName === "BUTTON") {
          const category = e.target.dataset.category;
          this.ui.renderLoading();
          const games = await this.api.getGamesByCategory(category);
          this.ui.renderGames(games);
        }
      });
  }
}
