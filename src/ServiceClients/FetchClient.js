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
    for (let i = 0; i < AllCards.length; i++) {
      if (AllCards[i].id == "random") {
        return AllCards[i];
      }
    }
    return null;
  },
  async post(url, body) {
    return await [];
  },
};
export default FetchClient;
