const cardService = require("./cardService");

const cardCrtl = {
  ping: async (req, res) => {
    return res.status(200).send({ message: "server is running fine" });
  },

  addCard: async (req, res) => {
    try {
      const result = await cardService.addCard(req.body);

      if (result.code == 11000) {
        return res.status(400).send({ message: "card title already exist" });
      }

      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  getAllCard: async (req, res) => {
    try {
      const result = await cardService.getAllCard();

      if (!result.length) {
        return res.status(200).send({ message: "first add few cards" });
      }

      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  getCardByTitle: async (req, res) => {
    try {
      const result = await cardService.getCardByTitle(req.params.title);

      if (!result) {
        return res.status(400).send({ message: "card does not exist" });
      }

      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = cardCrtl;
