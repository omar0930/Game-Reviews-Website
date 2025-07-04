class GameService {
  constructor() {
    this.baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api";
    this.headers = {
      "x-rapidapi-key": "d877e054edmshed74b35daaf9d47p1d3268jsn4e320d3d23b3",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    };
  }

  async getGamesByCategory(category) {
    const res = await fetch(`${this.baseUrl}/games?category=${category}`, {
      method: "GET",
      headers: this.headers,
    });
    return await res.json();
  }

  async getAllGames() {
    const res = await fetch(`${this.baseUrl}/games`, {
      method: "GET",
      headers: this.headers,
    });
    return await res.json();
  }
}
