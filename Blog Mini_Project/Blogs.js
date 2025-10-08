let mongoose = require(`mongoose`);

let BlogsSchema = new mongoose.Schema(
  {
    title: "string",
    author: "string",
    authorRating: "number",
    publishDate: { type: Date },
    genre: "string",
    content: "string",
    researchedFrom: ["string"],
    tags: ["string"],
    likes: "number",
    views: "number",
    commentsCount: "number",
  },
  { collection: `NewBlogs` }
);

let BlogsModel = mongoose.model(`NewBlogs`, BlogsSchema);

module.exports = BlogsModel;
