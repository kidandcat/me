const Twitter = require("twitter");

module.exports = function(app) {
  console.log("Twitter service started");
  const client = new Twitter({
    consumer_key: "LSNiYQjiUgcwvvwEzAEJq7sgn",
    consumer_secret: "bWRud9irmhe1Qe3obwdkKcW8f79VLh21OfiKU4WAWxt4xzAcUF",
    access_token_key: "210553564-MFzb0h0j9hJqmf9GyWobrES1SoV4r20kxyh5A2tF",
    access_token_secret: "NARXlchd0flvbZjMYX9sPWCSvKzGGcqQWyMvOTyuxgcvy"
  });

  const stream = client.stream("statuses/filter", { track: "nintendo" });
  stream.on("data", function(event) {
    app.service("tweets").create({
      text: event.text,
      created_at: event.created_at,
      username: event.user.screen_name,
      name: event.user.name,
      verified: event.user.verified,
      image: event.user.profile_image_url_https
    });
  });

  stream.on("error", function(error) {
    throw error;
  });
};
