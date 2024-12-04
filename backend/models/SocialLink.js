const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("SocialLink", socialLinkSchema);
