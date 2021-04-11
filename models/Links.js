const m = require("mongoose");
const { nanoid } = require("nanoid");

const LinkSchema = new m.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: () => nanoid(6),
  },
});

module.exports = m.model("Links", LinkSchema);
