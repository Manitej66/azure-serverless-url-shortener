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
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = m.model("Links", LinkSchema);
