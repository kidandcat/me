import * as React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectTweets } from "../State/selectors";
import { LeyLineDrop } from "../style/ley-line";
import { Tweet } from "../tweets.service";
import { removeTweet } from "../State/actions";

const mapStateToProps = createStructuredSelector({
  tweets: selectTweets
});

const mapDispatchToProps = {
  removeTweet
};

export type Props = {
  tweets: Tweet[];
  removeTweet: Function;
};

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<Props, {}> {
  render() {
    const { tweets = [], removeTweet } = this.props;
    return (
      <div>
        <h1>T</h1>
        {tweets.map((tweet, i) => (
          <LeyLineDrop removeTweet={removeTweet} key={i} tweet={tweet} />
        ))}
      </div>
    );
  }
}
