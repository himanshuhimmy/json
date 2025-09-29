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
  { collection: `Blogs` }
);

let BlogsModel = mongoose.model(`Blogs`, BlogsSchema);

module.exports = BlogsModel;
