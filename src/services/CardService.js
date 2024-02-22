class CardService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getCard(id) {
    try {
      const response = this.httpClient.get(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getRandomCard() {
    try {
      const response = this.httpClient.getRandom();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createCard(card) {
    try {
      const response = this.httpClient.post("", card);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default CardService;
