import { AllCards } from "../app/assets/Cards/Cards";

const FetchClient = {
  async get(cardId) {
    for (let i = 0; i < AllCards.length; i++) {
      if (AllCards[i].id == cardId) {
        return AllCards[i];
      }
    }
    return null;
  },
  async getRandom() {
    return AllCards[Math.floor(Math.random() * AllCards.length)];
  },
  async post(url, body) {
    return await [];
  },
};
export default FetchClient;
