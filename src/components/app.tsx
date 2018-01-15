import * as React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectPayload, selectTweets } from "../State/selectors";
import { TweetActionCreators } from "../State/actions";

const mapStateToProps = createStructuredSelector({
  payload: selectPayload,
  tweets: selectTweets
});

const mapDispatchToProps = {
  getTweets: TweetActionCreators.init
};

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component {
  render() {
    const { payload, getTweets } = this.props;
    return (
      <div>
        <h1>Payload</h1>
        <pre>{payload}</pre>
        <button onClick={getTweets}>Get tweets</button>
      </div>
    );
  }
}
