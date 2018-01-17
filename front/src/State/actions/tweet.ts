const prefix = "TWEET_REQUEST";

export const TweetActions = {
  tweet: `NEW_TWEET`
};

export const newTweet = payload => ({
  type: TweetActions.tweet,
  payload
});

export const boundActions = dispatch => {
  return { boundNewTweet: payload => dispatch(newTweet(payload)) };
};
