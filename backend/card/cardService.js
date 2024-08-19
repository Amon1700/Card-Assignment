const cardSchema = require("./cardSchema");

const cardService = {
  addCard: async (data) => {
    try {
      const result = await cardSchema(data).save();

      return result;
    } catch (error) {
      return error;
    }
  },
  getAllCard: async () => {
    try {
      const result = await cardSchema.find();

      return result;
    } catch (error) {
      return error;
    }
  },
  getCardByTitle: async (title) => {
    try {
      const result = await cardSchema.findOne({ title: title });

      return result;
    } catch (error) {
      return error;
    }
  },
};

module.exports = cardService;
