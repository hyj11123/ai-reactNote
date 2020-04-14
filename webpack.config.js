"use strict";
const path = require("path");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  //시작점

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  // 빌드점

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
    ],
  },
  // 어떤기능들을 가지고 갈꺼냐

  plugins: [],
  // 추가기능

  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3030,
  },
  // 뭘 devserver로 만들꺼냐
};
