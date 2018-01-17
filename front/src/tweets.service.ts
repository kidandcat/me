const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");

const socket = io();
const app = feathers();
app.configure(socketio(socket));

export function loadTweetsService() {
  console.log("Tweets Service Ready");
  app
    .service("tweets")
    .on("created", (message: string) =>
      console.log("New tweet created", message)
    );
}
