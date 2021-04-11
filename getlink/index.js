const m = require("../db");

const Links = require("../models/Links");

module.exports = async function (context, req) {
  let response;

  try {
    const { url } = req.body;

    await m();

    response = await Links.findOne({
      shortUrl: url,
    }).exec();
  } catch (error) {
    response = error;
  }

  context.res = {
    body: response,
  };
};
