import { Store } from "redux";
const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");

const socket = io("127.0.0.1:3030");
const app = feathers();
app.configure(socketio(socket));

export function loadTweetsService(newTweet) {
  window.newTweet = newTweet;
  console.log("Tweets Service Ready");
  app.service("tweets").on("created", (message: Tweet) => {
    newTweet({
      id: message.id,
      text: message.text,
      created_at: message.created_at,
      username: message.username,
      name: message.name,
      verified: message.verified,
      image: message.image
    });
  });
}

window.tweet = () => {
  window.newTweet("False tweet");
};

export type Tweet = {
  id: number;
  text: string;
  created_at: string;
  username: string;
  name: string;
  verified: string;
  image: string;
};
