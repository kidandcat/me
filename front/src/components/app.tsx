import * as React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectTweets } from "../State/selectors";
import { LeyLineDrop } from "../style/ley-line";

const mapStateToProps = createStructuredSelector({
  tweets: selectTweets
});

const mapDispatchToProps = {};

export type Props = {
  tweets: string[];
};

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<Props, {}> {
  render() {
    const { tweets = [] } = this.props;
    return (
      <div>
        <h1>T</h1>
        {tweets.map(tweet => <LeyLineDrop text={tweet} />)}
      </div>
    );
  }
}
