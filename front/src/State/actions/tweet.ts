const prefix = "TWEET_REQUEST";

export const TweetActions = {
  tweet: `NEW_TWEET`,
  remove: `REMOVE_TWEET`
};

export const newTweet = payload => ({
  type: TweetActions.tweet,
  payload
});

export const removeTweet = payload => ({
  type: TweetActions.remove,
  payload
});
