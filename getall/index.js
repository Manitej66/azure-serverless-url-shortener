const m = require("../db");

const Links = require("../models/Links");

module.exports = async function (context, req) {
  let response;

  try {
    await m();

    response = await Links.find({});
  } catch (error) {
    response = error;
  }

  context.res = {
    body: response,
  };
};
