import { Store } from "redux";
const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");

const socket = io();
const app = feathers();
app.configure(socketio(socket));

export function loadTweetsService(newTweet) {
  window.newTweet = newTweet;
  console.log("Tweets Service Ready");
  app.service("tweets").on("created", (message: string) => {
    console.log("dispatcher", newTweet);
    console.log("New tweet", message);
    newTweet(message);
  });
}

window.tweet = () => {
  window.newTweet("False tweet");
};
