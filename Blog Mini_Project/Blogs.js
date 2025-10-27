let mongoose = require(`mongoose`);

let AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    insta: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: `authors` }
);

let AuthorModel = mongoose.model(`authors`, AuthorSchema);

let BlogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors", //  Foreign key reference
      required: true,
    },
    authorRating: { type: Number, default: 0 },
    publishDate: { type: Date, default: Date.now },
    genre: { type: String, default: "" },
    content: { type: String, default: "" },
    researchedFrom: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    image: { type: String, required: true, default: "" },
  },
  { collection: `NewBlogs` }
);
let BlogsModel = mongoose.model(`NewBlogs`, BlogsSchema);

module.exports = {
  BlogsModel,
  AuthorModel,
};
