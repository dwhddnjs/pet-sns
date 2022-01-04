const moogoose = require("mongoose");
const Schema = moogoose.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
  image: String,
  publishedDate: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  likeUser: {
    type: Array,
    default: [],
  },
  comment: {
    type: Array,
    default: [],
  },
  user: {
    _id: moogoose.Types.ObjectId,
    username: String,
  },
});

module.exports = moogoose.model("post", postSchema);
