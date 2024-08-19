const cardRoute = require("express").Router();
const cardCrtl = require("./cardCrtl");

cardRoute.get("/ping", cardCrtl.ping);
cardRoute.post("/card", cardCrtl.addCard);
cardRoute.get("/card", cardCrtl.getAllCard);
cardRoute.get("/card/:title", cardCrtl.getCardByTitle);

module.exports = cardRoute;
